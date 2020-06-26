import React, { Component } from 'react';
import Icon from './icon';

import { childrenWithProps } from './util';
import debouncer from '../../util/debouncer_util';

/* Example data format
{
    1: {
        type: "folder",
        content: "Text Realms",
        next: "3",
        prev: null,
        parent: null
    },
    2: {
        type: "item",
        content: "general",
        next: null,
        prev: null,
        parent: 1
    },
    3: {
        type: "folder",
        content: "Voice Realms",
        next: null,
        prev: 1,
        parent: null
    },
    4: {
        type: "item",
        content: "general",
        next: null,
        prev: null,
        parent: 3
    }
}
*/

export default class DragNDrop extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            dragging: null,
            over: null
        };
        
        this._handleDragOver = this._handleDragOver.bind(this);
        this._handleDrop = this._handleDrop.bind(this);
        this._startDrag = this._startDrag.bind(this);
        this._updateOver = this._updateOver.bind(this);
    }

    _startDrag(dragging) {
        this.setState({ dragging });
    }

    _updateOver(over) {
        this.setState({ over });
    }
    
    _handleDragOver(e) {
        e.preventDefault();
    }

    _handleDrop(e) {
        e.stopPropagation();
        const { data } = this.props;
        
        // Get the involved items
        const dragging = Object.assign({}, data[this.state.dragging]);
        const dropping = this.state.over ? Object.assign({}, data[this.state.over.id]) : { id: null, next: null, prev: data };
        // console.log(dragging, dropping);
        if (dragging.next === dropping.id) return;

        const orderables = [dragging];

        if (dropping.id) orderables.push(dropping);

        // Update references
        const dragPrev = Object.assign({}, data[dragging.prev]);
        if (dragPrev.id) { 
            dragPrev.next = dragging.next;
            orderables.push(dragPrev);
        }

        const dragNext = Object.assign({}, data[dragging.next]);
        if (dragNext.id) {
            dragNext.prev = dragging.prev;
            orderables.push(dragNext);
        }

        const dropPrev = Object.assign({}, data[dropping.prev]);
        dragging.prev = dropping.prev;
        if (dropPrev.id) {
            dropPrev.next = dragging.id;
            orderables.push(dropPrev);
        }

        dropping.prev = dragging.id;
        dragging.next = dropping.id;

        console.log(orderables);
        // this.props.update()
    }

    _insertItem(item, tree) {
        if (item.parent) {
            const subTree = this._insertItem(tree[item.parent], tree);
            if (!subTree[item.id]) {
                subTree[item.id] = item;
            }

            return subTree[item.id];
        } else {
            if (!tree[item.id]) {
                tree[item.id] = item;
            }

            return tree[item.id];
        }
    }

    _generateTree() {
        const tree = {};
        const { data } = this.props;

        for (const id in data) {
            this._insertItem(data[id], tree);
        }

        return tree;
    }

     _findHead(tree) {
        let head = Object.values(tree)[0];

        if (!head) return null;

        while (head.prev) {
            head = head.prev;
        }

        return head;
    }

    _renderList(tree, parent=null) {
        let head = this._findHead(tree);

        if (!head) return null;
        
        const list = [];

        do {
            const { id, content, next, onClick, prev, parent, type, ...children } = head;
            if (type === "folder") {
                list.push(
                    <DragNDrop.Folder 
                        name={ content } 
                        key={ id } 
                        id={ id }
                        startDrag={ this._startDrag }
                    >
                        { this._renderList(children, id) }
                    </DragNDrop.Folder>
                );
            } else {
                list.push(
                    <DragNDrop.Item 
                        key={ id } 
                        onClick={ onClick } 
                        id={ id } 
                        data-parent={ parent }
                        startDrag={ this._startDrag }
                    >
                        { content }
                    </DragNDrop.Item>
                );
            }
            head = tree[next];
        } while (head);

        return list;
    }
    
    render() {
        const childProps = { updateOver: this._updateOver };
        
        const className = `shoebuckle dragndrop`;

        const tree = this._generateTree();
        const list = this._renderList(tree);
        
        return (
            <div 
                className={ className } 
                data-type="dragndrop" 
                onDragOver={ this._handleDragOver }
                onDrop={ this._handleDrop }
            >
                { childrenWithProps(list, childProps) }
            </div>
        );
    }
}

class Draggable extends Component {
    constructor(props) {
        super(props);

        this.query = ".draggable:not(.dragging)";
        
        this.state = {
            dragging: false,
            x: 0,
            y: 0
        };

        this._handleDragStart = this._handleDragStart.bind(this);
        this._handleDrag = this._handleDrag.bind(this);
        this._handleDragEnd = this._handleDragEnd.bind(this);
        this._handleMouseMove = this._handleMouseMove.bind(this);
    }

    _handleDragStart(e) {
        this.setState({ dragging: true });
        if (this.props.startDrag) {
            this.props.startDrag(this.props.id);
        }
    }
    
    _handleDrag(e) {
        const draggableElements = [...document.querySelectorAll(this.query)];

        const y = e.clientY;
        
        const { element } = draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;

            if (offset < 0 && offset > closest.offset) {
                return { offset, element: child };
            }
            
            return closest;
        }, { offset: Number.NEGATIVE_INFINITY });

        if (this.props.updateOver) {
            this.props.updateOver(element || null);
        }
    }

    _handleDragEnd(e) {
        this.setState({ dragging: false });
    }

    _handleMouseMove(e) {
        this.setState({ x: e.clientX, y: e.clientY });
    }
}

DragNDrop.Folder = class extends Draggable {
    constructor(props) {
        super(props);
    
        this.query = ".top-level:not(.dragging)";
        
        this.state = {
            dragging: false,
            expanded: true
        };

        this._toggleExpanded = this._toggleExpanded.bind(this);
    }

    _toggleExpanded(e) {
        e.stopPropagation();
        this.setState({ expanded: !this.state.expanded });
    }
    
    render() {
        const { dragging, expanded } = this.state;
        
        const {
            children,
            id,
            name
        } = this.props;

        const className = `dragndrop-folder draggable top-level${ dragging ? " dragging" : "" }`;
        const icon = expanded ? <Icon name="angle-down" key={ Math.random() } /> : <Icon name="angle-right" key={ Math.random() } />;

        return (
            <div 
                draggable
                className={ className } 
                data-type="dragndrop-folder" 
                id={ id } 
                onClick={ this._toggleExpanded }
                onDragStart={ this._handleDragStart }
                onDrag={ this._handleDrag }
                onDragEnd={ this._handleDragEnd }
            >
                { icon } { name }
                { expanded && (
                    <div className="dragndrop-folder-children">
                        { children }
                    </div> 
                )}
            </div>
        );
    }
}

DragNDrop.Item = class extends Component {
    render() {
        const {
            children,
            id,
            content,
            onClick
        } = this.props;

        const className = `dragndrop-item draggable${ this.props["data-parent"] ? "" : " top-level"}`;
        
        return (
            <div 
                draggable
                className={ className } 
                data-type="dragndrop-item" 
                data-parent={ this.props["data-parent"] }
                onClick={ onClick } 
                id={ id }
            >
                { children || content }
            </div>
        );
    }
}
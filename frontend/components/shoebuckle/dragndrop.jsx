import React, { Component } from 'react';
import Icon from './icon';

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

    _renderList(tree) {
        let head = this._findHead(tree);

        if (!head) return null;
        
        const list = [];

        do {
            const { id, content, next, onClick, prev, parent, type, ...children } = head;
            if (type === "folder") {
                list.push(
                    <DragNDrop.Folder name={ content } key={ id } id={ id }>
                        { this._renderList(children) }
                    </DragNDrop.Folder>
                );
            } else {
                list.push(
                    <DragNDrop.Item key={ id } onClick={ onClick } id={ id }>
                        { content }
                    </DragNDrop.Item>
                );
            }
            head = tree[next];
        } while (head);

        return list;
    }
    
    render() {
        const className = `shoebuckle dragndrop`;

        const tree = this._generateTree();
        // console.log("tree", tree);
        const list = this._renderList(tree);
        // console.log("list", list);
        
        return (
            <div className={ className } data-type="dragndrop">
                { list }
            </div>
        );
    }
}

class Draggable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dragging: false
        };

        this._handleDragStart = this._handleDragStart.bind(this);
        this._handleDrag = this._handleDrag.bind(this);
        this._handleDragEnd = this._handleDragEnd.bind(this);
        this._handleDrop = this._handleDrop.bind(this);
    }

    _handleDragStart(e) {
        this.setState({ dragging: true });
    }
    
    _handleDrag(e) {
    }

    _handleDragEnd(e) {
        this.setState({ dragging: false });
    }

    _handleDrop(e) {
    }
}

DragNDrop.Folder = class extends Draggable {
    constructor(props) {
        super(props);
    
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

        const className = `dragndrop-folder`;
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
                onDrop={ this._handleDrop }
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

        const className = `dragndrop-item`;
        
        return (
            <div 
                draggable
                className={ className } 
                data-type="dragndrop-item" 
                onClick={ onClick } 
                id={ id }
            >
                { children || content }
            </div>
        );
    }
}
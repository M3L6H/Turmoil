import React, { Component } from 'react';
import Icon from './icon';

import { childrenWithProps } from './util';

export default class DragNDrop extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            dragging: null,
            over: null,
            fromList: null
        };
        
        this._handleDragOver = this._handleDragOver.bind(this);
        this._handleDrop = this._handleDrop.bind(this);
        this._startDrag = this._startDrag.bind(this);
        this._updateOver = this._updateOver.bind(this);
    }

    _startDrag(dragging, fromList=null) {
        this.setState({ dragging, fromList });
    }

    _updateOver(over) {
        this.setState({ over });
    }
    
    _handleDragOver(e) {
        e.preventDefault();
    }

    _handleDrop(e, toList=null) {
        e.stopPropagation();

        const dragging = this.state.dragging;
        const dropping = this.state.over;
        const { fromList } = this.state;

        this.props.moveBefore(dropping, dragging, fromList, toList);
        this.forceUpdate();
    }

    _renderList(listData) {
        const it = listData.start();

        const list = [];
        
        while (it.value) {
            const { id, content, onClick, parent, type, children } = it.value;
            if (type === "folder") {
                list.push(
                    <DragNDrop.Folder 
                        name={ content } 
                        key={ id } 
                        id={ id }
                        startDrag={ this._startDrag }
                        handleDrop={ this._handleDrop }
                    >
                        { this._renderList(children) }
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
            it.next();
        }

        return list;
    }
    
    render() {
        const childProps = { updateOver: this._updateOver };
        
        const className = `shoebuckle dragndrop`;

        const list = this._renderList(this.props.list);
        
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
        this.topLevel = false;
        
        this.state = {
            dragging: false
        };

        this._handleDragStart = this._handleDragStart.bind(this);
        this._handleDrag = this._handleDrag.bind(this);
        this._handleDragEnd = this._handleDragEnd.bind(this);
    }

    _handleDragStart(e) {
        e.dataTransfer.setData("top-level", this.topLevel);
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
            this.props.updateOver(element ? element.id : null);
        }
    }

    _handleDragEnd() {
        this.setState({ dragging: false });
    }
}

DragNDrop.Folder = class extends Draggable {
    constructor(props) {
        super(props);
    
        this.query = ".top-level:not(.dragging)";
        this.topLevel = true;
        
        this.state = {
            dragging: false,
            expanded: true
        };

        this._handleDrop = this._handleDrop.bind(this);
        this._handleDragOver = this._handleDragOver.bind(this);
        this._toggleExpanded = this._toggleExpanded.bind(this);
    }

    _handleDrop(e) {
        this.props.handleDrop(e, e.dataTransfer.getData("top-level") ? null : this.props.id);
    }
    
    _handleDragOver(e) {
        e.preventDefault();
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
                onDragStart={ this._handleDragStart }
                onDrag={ this._handleDrag }
                onDragEnd={ this._handleDragEnd }
                onDrop={ this._handleDrop }
                onDragOver={ this._handleDragOver }
                onClick={ this._toggleExpanded }
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
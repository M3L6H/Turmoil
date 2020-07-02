import React, { Component } from 'react';

import { parseColor } from './util';

export default class ContextMenu extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            open: false,
            x: 0,
            y: 0,
            target: null,
            callbacks: []
        };

        this._closeMenu = this._closeMenu.bind(this);
        this._handleRightClick = this._handleRightClick.bind(this);
    }

    _closeMenu() {
        if (!this.state.open) return;
        
        this.setState({ open: false, target: null });
    }

    _handleRightClick(e) {
        e.preventDefault();

        let target = null;

        e.path.forEach(elt => {
            if (elt.dataset && elt.dataset.context) {
                target = elt;
            }
        });
        
        if (!target) return;

        this.setState({ 
            open: true, 
            x: e.clientX, 
            y: e.clientY, 
            target 
        });

        if (this.props.onContextMenu) {
            this.props.onContextMenu(e, target);
        }
    }
    
    componentDidMount() {
        document.addEventListener("contextmenu", this._handleRightClick);    
    }

    componentWillUnmount() {
        document.removeEventListener("contextmenu", this._handleRightClick);
    }
    
    render() {
        const className = "shoebuckle context-menu";
        
        const { open, x, y, target } = this.state;

        if (!open) return null;

        const items = this.props.items.map(({ label, ...other }, key) => (
            <ContextMenu.Item 
                { ...other } 
                key={ key } 
                target={ target }
                closeMenu={ this._closeMenu }
            >
                { label }
            </ContextMenu.Item>
        ));

        const style = {
            "position": "absolute",
            "left": `${ x }px`,
            "top": `${ y }px`
        };
        
        return (
            <div className={ className } style={ style }>
                <div className="bg" onClick={ this._closeMenu }></div>
                { items }     
            </div>
        );
    }
}

ContextMenu.Item = class extends Component {
    constructor(props) {
        super(props);
    
        this._handleClick = this._handleClick.bind(this);
    }
    
    _handleClick(e) {
        const { onClick, target, closeMenu } = this.props;

        closeMenu();

        if (onClick) {
            onClick(e, target);
        }
    }
    
    render() {
        const {
            children,
            content
        } = this.props;

        const className = `context-menu-item${ parseColor(this.props) }`;
        
        return (
            <div 
                data-action={ this.props["data-action"] }
                className={ className } 
                onClick={ this._handleClick }
            >
                { children || content }
            </div>
        );
    }
};
import React, { Component } from 'react';

import { childrenWithProps } from './util';

export default class Menu extends Component {
    render() {
        const {
            children,
            items,
            center,
            compact,
            even,
            fluid,
            inverted,
            pointing,
            secondary,
            stretch,
            tabular,
            vertical
        } = this.props;
        const childProps = { center };

        const className = `shoebuckle menu${ compact ? " compact" : "" }${ even ? " even" : "" }${ fluid ? " fluid" : "" }${ inverted ? " inverted" : "" }${ pointing ? " pointing" : "" }${ secondary ? " secondary" : "" }${ stretch ? " stretch" : "" }${ tabular ? " tabular" : "" }${ vertical ? " vertical" : "" }${ this.props.className ? " " + this.props.className : "" }`;

        return (
            <div className={ className }>
                { childrenWithProps(children, childProps) }
                { items && items.map(({ name, active, value }) => (
                    <Menu.Item key={ name } name={ name } active={ active } center={ center }>
                        { value }
                    </Menu.Item>
                )) }
            </div>
        );
    }
}

Menu.Item = class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name
        };

        this._handleClick = this._handleClick.bind(this);
    }
    
    _handleClick(e) {
        const { onClick } = this.props;

        if (onClick) {
            onClick(e, Object.assign({}, this.state));
        }
    }
    
    render() {
        const {
            children,
            content,
            name,
            active,
            center,
            position
        } = this.props;
        
        const className = `menu-item${ active ? " active" : "" }${ center ? " center" : "" }${ position ? ` position-${ position }` : ""}`;

        return (
            <span name={ name } className={ className } onClick={ this._handleClick }>
                { children || content }
            </span>
        );
    }
}

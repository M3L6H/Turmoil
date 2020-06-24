import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        const {
            children,
            content,
            items,
            compact,
            even,
            fluid,
            inverted,
            pointing,
            secondary,
            tabular,
            vertical
        } = this.props;

        const className = `shoebuckle menu${ compact ? " compact" : "" }${ even ? " even" : "" }${ fluid ? " fluid" : "" }${ inverted ? " inverted" : "" }${ pointing ? " pointing" : "" }${ secondary ? " secondary" : "" }${ tabular ? " tabular" : "" }${ vertical ? " vertical" : "" }`;
        
        return (
            <div className={ className }>
                { children || content }
                { items && items.map(({ name, active, value }) => (
                    <Menu.Item key={ name } name={ name } active={ active }>
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
            position
        } = this.props;
        
        const className = `menu-item${ active ? " active" : "" }${ position ? ` position-${ position }` : ""}`;

        return (
            <span name={ name } className={ className } onClick={ this._handleClick }>
                { children || content }
            </span>
        );
    }
}

import React, { Component } from 'react';

import { childrenWithProps, parseColor, parseSize } from './util'

class Button extends Component {
    static Content(props) {
        const {
            children,
            content,
            hidden,
            visible
        } = props;

        const className = `shoebuckle btn-content${ hidden ? " hidden" : "" }${ visible ? " visible" : "" }${ props.className ? " " + props.className : "" }`;

        return (
            <div className={ className }>
                { children || content }
            </div>
        )
    }
    
    constructor(props) {
        super(props);
    }

    render() {
        const { 
            children, 
            content, 
            compact,
            inverted,
            pill,
            fluid,
            primary, 
            secondary, 
            basic,
            animated,
            onClick,
            type
        } = this.props;
    
        const childProps = { inverted };
        const className = `shoebuckle btn${ compact ? " compact" : "" }${ pill ? " pill" : "" }${ primary ? " primary" : "" }${ secondary ? " secondary" : "" }${ basic ? " basic" : "" }${ animated ? ` animated${ animated !== true ? " " + animated : "" }` : "" }${ fluid ? " fluid" : "" }${ parseColor(this.props) }${ parseSize(this.props) }${ this.props.className ? " " + this.props.className : "" }`;
        
        return (
            <button
                className={ className }
                onClick={ onClick }
                type={ type }
            >
                { childrenWithProps(children, childProps) || content }
            </button>
        );
    }
}

export default Button;
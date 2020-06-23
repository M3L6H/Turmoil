import React, { Component } from 'react';

import { parseColor, parseSize } from './util'

class Button extends Component {
    static Content(props) {
        const {
            children,
            content,
            hidden,
            visible
        } = props;

        const className = `shoebuckle btn-content${ hidden ? " hidden" : "" }${ visible ? " visible" : "" }`;

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
            fluid,
            primary, 
            secondary, 
            basic,
            animated,
            onClick,
            type
        } = this.props;
    
        const className = `shoebuckle btn${ compact ? " compact" : ""}${ primary ? " primary" : "" }${ secondary ? " secondary" : "" }${ basic ? " basic" : "" }${ animated ? ` animated${ animated !== true ? " " + animated : "" }` : "" }${ fluid ? " fluid" : "" }${ parseColor(this.props) }${ parseSize(this.props) }`;
        
        return (
            <button
                className={ className }
                onClick={ onClick }
                type={ type }
            >
                { children || content }
            </button>
        );
    }
}

export default Button;
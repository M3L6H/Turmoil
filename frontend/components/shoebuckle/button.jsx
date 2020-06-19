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
            primary, 
            secondary, 
            basic,
            animated,
            onClick 
        } = this.props;
    
        const className = `shoebuckle btn${ primary ? " primary" : "" }${ secondary ? " secondary" : "" }${ basic ? " basic" : "" }${ animated ? ` animated${ animated !== true ? " " + animated : "" }` : "" }${ parseColor(this.props) }${ parseSize(this.props) }`;
        
        return (
            <button
                className={ className }
                onClick={ onClick }
            >
                { children || content }
            </button>
        );
    }
}

export default Button;
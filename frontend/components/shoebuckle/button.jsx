import React, { Component } from 'react';

import { parseColor, parseSize } from './util'

class Button extends Component {
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
            onClick 
        } = this.props;
    
        const className = `shoebuckle btn 
            ${ primary && "primary" } 
            ${ secondary && "secondary" } 
            ${ basic && "basic" }
            ${ parseColor(this.props) }
            ${ parseSize(this.props) }
        `;
        
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
import React from 'react';

import { parseColor, parseSize } from './util'

export default (props) => {
    const { 
        children, 
        content, 
        primary, 
        secondary, 
        basic,
        onClick 
    } = props;

    const className = `shoebuckle btn 
        ${ primary && "primary" } 
        ${ secondary && "secondary" } 
        ${ basic && "basic" }
        ${ parseColor(props) }
        ${ parseSize(props) }
    `;
    
    return (
        <button
            className={ className }
            onClick={ onClick }
        >
            { children || content }
        </button>
    );
};

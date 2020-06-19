import React from 'react';

export default (props) => {
    const { 
        children, 
        content, 
        primary, 
        secondary, 
        basic,
        inverted,
        red,
        orange,
        yellow,
        olive,
        green,
        teal,
        blue,
        violet,
        purple,
        pink,
        grey,
        black,
        onClick 
    } = props;

    const className = `shoebuckle btn 
        ${ primary && "primary" } 
        ${ secondary && "secondary" } 
        ${ basic && "basic" }
        ${ inverted && "inverted" }
        ${ red && "red" }
        ${ orange && "orange" }
        ${ yellow && "yellow" }
        ${ olive && "olive" }
        ${ green && "green" }
        ${ teal && "teal" }
        ${ blue && "blue" }
        ${ violet && "violet" }
        ${ purple && "purple" }
        ${ pink && "pink" }
        ${ grey && "grey" }
        ${ black && "black" }
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

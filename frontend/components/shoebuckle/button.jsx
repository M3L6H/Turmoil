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
        mini,
        tiny,
        small,
        normal,
        large,
        big,
        huge,
        massive,
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
        ${ (mini && "mini") ||
           (tiny && "tiny") ||
           (small && "small") ||
           (normal && "normal") ||
           (large && "large") ||
           (big && "big") ||
           (huge && "huge") ||
           (massive && "massive") ||
           "normal" }
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

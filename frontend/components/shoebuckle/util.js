export const selectColor = ({ inverted, red, orange, yellow, olive, green, teal, blue, violet, purple, pink, grey, black }) => (
    { inverted, red, orange, yellow, olive, green, teal, blue, violet, purple, pink, grey, black }
);

export const parseColor = (props) => {
    const {
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
        black
    } = props;

    return `
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
};

export const selectSize = ({ mini, tiny, small, normal, large, big, huge, massive })  => (
    { mini, tiny, small, normal, large, big, huge, massive }
);

export const parseSize = (props) => {
    const {
        mini,
        tiny,
        small,
        normal,
        large,
        big,
        huge,
        massive
    } = props;

    return (mini && "mini") ||
    (tiny && "tiny") ||
    (small && "small") ||
    (normal && "normal") ||
    (large && "large") ||
    (big && "big") ||
    (huge && "huge") ||
    (massive && "massive") ||
    "normal";
};

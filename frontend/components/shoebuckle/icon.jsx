import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Icon extends Component {
    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        const { link, to, history } = this.props;

        if (link && to) {
            history.push(to);
        }
    }

    render() {
        const {
            children,
            content,
            name,
            loading,
            flipped,
            rotated,
            link,
            disabled,
            fitted,
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
            massive
        } = this.props;
    
        const className = `
            shoebuckle
            icon
            fas
            fa-${ name }
            ${ loading && "fa-spin" }
            ${ flipped && `fa-flip-${ flipped }` }
            ${ rotated && `fa-rotate-${ rotated }` }
            ${ link && "link" }
            ${ disabled && "disabled" }
            ${ fitted && "fitted" }
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
            <span className="shoebuckle icon-wrapper" onClick={ this._handleClick }>
                <i className={ className }>
                    { children || content }
                </i>
            </span>
        );
    };
}

export default withRouter(Icon);
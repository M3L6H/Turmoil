import React, { Component, Children, isValidElement, cloneElement } from 'react';
import { withRouter } from "react-router-dom";

import { parseColor, parseSize, selectColor, selectSize } from './util';

class Icon extends Component {
    static Group(props) {
        const { children } = props;
        const childProps = { ...selectColor(props), ...selectSize(props) };

        const className = `shoebuckle icon-group fa-layers fa-fw${ parseSize(props) }${ props.className ? " " + props.className : "" }`;

        const childrenWithProps = Children.map(children, child => {
            if (isValidElement(child)) {
                return cloneElement(child, { ...childProps, ...child.props });
            }

            return child;
        });

        return (
            <span className={ className }>
                { childrenWithProps }
            </span>
        );
    }

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
            counter,
            border,
            loading,
            flipped,
            rotated,
            transform,
            inverted,
            link,
            disabled,
            fitted,
            onClick
        } = this.props;
    
        const className = `shoebuckle icon ${ name ? "fas" : "" } fa-${ name || (counter && "layers-counter") || "layers-text" }${ border ? " fa-border" : "" }${ loading ? " fa-spin" : "" }${ flipped ? ` fa-flip-${ flipped }` : "" }${ rotated ? ` fa-rotate-${ rotated }` : "" }${ inverted ? " fa-inverse" : "" }${ link ? " link" : "" }${ disabled ? " disabled" : "" }${ fitted ? " fitted" : "" }${ parseColor(this.props) }${ parseSize(this.props) }${ this.props.className ? " " + this.props.className : "" }`;

        return (
            <span className="shoebuckle icon-wrapper" onClick={ onClick || this._handleClick }>
                <i 
                    className={ className }
                    data-fa-transform={ transform }
                >
                    { children || content }
                </i>
            </span>
        );
    };
}

export default withRouter(Icon);
import React, { Component, Children, isValidElement, cloneElement } from 'react';
import { withRouter } from 'react-router-dom';

import { parseColor, parseSize, selectColor, selectSize } from './util';

class Label extends Component {
    static Group(props) {
        const { children } = props;
        const childProps = { ...selectColor(props), ...selectSize(props) };

        const className = `shoebuckle label-group${ props.className ? " " + props.className : "" }`;

        const childrenWithProps = Children.map(children, child => {
            if (isValidElement(child)) {
                return cloneElement(child, { ...childProps, ...child.props });
            }

            return child;
        });

        return (
            <div className={ className }>
                { childrenWithProps }
            </div>
        );
    }

    constructor(props) {
        super(props);
    
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        const { history, link, to } = this.props;

        if (link && to) {
            history.push(to);
        }
    }
    
    render() {
        const {
            children,
            content,
            pointing,
            error,
            circular,
            floating,
            tag,
            link
        } = this.props;

        const pointingClass = pointing ? `pointing ${ pointing !== true ? "" + pointing : "above" }` : false;
        
        const className = `shoebuckle label${ circular ? " circular" : "" }${ error ? " error" : "" }${ floating ? " floating" : "" }${ tag ? " tag" : "" }${ link ? " link" : "" }${ parseColor(this.props) }${ parseSize(this.props) }${ this.props.className ? " " + this.props.className : "" }`;

        const pointer = <div className={ `${ pointingClass }${ error ? " error" : "" }`}></div>;
        
        return (
            <div className={ className } onClick={ this._handleClick }>
                { pointingClass && !floating && pointer }
                { floating ? 
                    <div className="floating-content">
                        { pointingClass && pointer }
                        { children || content }
                    </div> 
                : 
                    (children || content)
                }
            </div>
        );
    }
}

export default withRouter(Label);
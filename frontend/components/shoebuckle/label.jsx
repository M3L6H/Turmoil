import React, { Component } from 'react';
import { parseColor, parseSize } from './util'

class Label extends Component {
    render() {
        const {
            children,
            content,
            pointing,
            floating,
            tag
        } = this.props;

        const pointingClass = pointing ? `pointing ${ pointing !== true ? "" + pointing : "above" }` : false;
        
        const className = `shoebuckle label${ floating ? " floating" : "" }${ tag ? " tag" : "" }${ parseColor(this.props) }${ parseSize(this.props) }`;
        
        return (
            <div className={ className }>
                { pointingClass && <div className={ pointingClass }></div> }
                { floating ? 
                    <div className="floating-content">{ children || content }</div> : 
                    (children || content)
                }
            </div>
        );
    }
}

export default Label;
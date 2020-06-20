import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { parseColor, parseSize } from './util';

class Label extends Component {
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
            circular,
            floating,
            tag,
            link
        } = this.props;

        const pointingClass = pointing ? `pointing ${ pointing !== true ? "" + pointing : "above" }` : false;
        
        const className = `shoebuckle label${ circular ? " circular" : "" }${ floating ? " floating" : "" }${ tag ? " tag" : "" }${ link ? " link" : "" }${ parseColor(this.props) }${ parseSize(this.props) }`;
        
        return (
            <div className={ className } onClick={ this._handleClick }>
                { pointingClass && <div className={ pointingClass }></div> }
                { floating ? 
                    <div className="floating-content">{ children || content }</div> : 
                    (children || content)
                }
            </div>
        );
    }
}

export default withRouter(Label);
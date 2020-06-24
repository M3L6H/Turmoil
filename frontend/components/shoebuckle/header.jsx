import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { parseColor } from './util';

class Header extends Component {
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
            dividing,
            fluid,
            icon,
            link,
            huge,
            large,
            medium,
            small,
            tiny, 
            mini
        } = this.props;

        const Tag = this.props.as ? this.props.as : "div";

        const className = `shoebuckle header${ dividing ? " dividing" : "" }${ fluid ? " fluid" : "" }${ icon ? " icon" : "" }${ link ? " link" : "" }${ (huge && " huge") || (large && " large") || (medium && " medium") || (small && " small") || (tiny && " tiny") || (mini && " mini") || "" }${ parseColor(this.props) }${ this.props.className ? " " + this.props.className : "" }`;
        
        return (
            <Tag className={ className } onClick={ this._handleClick }>
                { children || content }
            </Tag>
        );
    }
}

Header.Subheader = (props) => {
    const {
        children,
        content
    } = props;

    const className = `header-subheader${ props.className ? " " + props.className : "" }`;

    return (
        <div className={ className } >
            { children || content }
        </div>
    );
};

export default withRouter(Header);
import React, { Component } from 'react';

import { parseColor } from './util';

export default class Header extends Component {
    render() {
        const {
            children,
            content,
            dividing,
            fluid,
            icon,
            huge,
            large,
            medium,
            small,
            tiny, 
            mini
        } = this.props;

        const Tag = this.props.as ? this.props.as : "div";

        const className = `shoebuckle header${ dividing ? " dividing" : "" }${ fluid ? " fluid" : "" }${ icon ? " icon" : "" }${ (huge && " huge") || (large && " large") || (medium && " medium") || (small && " small") || (tiny && " tiny") || (mini && " mini") || "" }${ parseColor(this.props) }`;
        
        return (
            <Tag className={ className }>
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

    const className = `header-subheader`;

    return (
        <div className={ className } >
            { children || content }
        </div>
    );
};
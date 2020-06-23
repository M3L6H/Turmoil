import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        const {
            children,
            content,
            icon,
            huge,
            large,
            medium,
            small,
            tiny
        } = this.props;

        const Tag = this.props.as ? this.props.as : "div";

        const className = `shoebuckle header${ icon ? " icon" : "" }${ (huge && " huge") || (large && " large") || (medium && " medium") || (small && " small") || (tiny && " tiny") || "" }`;
        
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
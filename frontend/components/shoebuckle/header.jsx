import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        const {
            children,
            content
        } = this.props;

        const Tag = this.props.as ? this.props.as : "div";

        const className = `shoebuckle header`;
        
        return (
            <Tag className={ className }>
                { children || content }
            </Tag>
        );
    }
}

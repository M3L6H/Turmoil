import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        const {
            children,
            thin,
            visible
        } = this.props;

        const className = `sidebar${ thin ? " thin" : "" }${ visible ? " visible" : "" }`;
        const Tag = this.props.as ? this.props.as : "div";
        
        return (
            <Tag { ...this.props } className={ className }>
                { children }
            </Tag>
        );
    }
}

Sidebar.Pushable = class extends Component {
    render() {
        const {
            children
        } = this.props;

        const className = `shoebuckle sidebar-pushable`;
        
        return (
            <div className={ className }>
                { children }
            </div>
        );
    }
};

Sidebar.Pusher = class extends Component {
    render() {
        const {
            children,
            onClick
        } = this.props;

        const className = `sidebar-pusher`;

        return (
            <div className={ className } onClick={ onClick }>
                { children }
            </div>
        );
    }
};
import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        const {
            children,
            overlay,
            thin,
            visible
        } = this.props;

        const className = `sidebar${ overlay ? " overlay" : "" }${ thin ? " thin" : "" }${ visible ? " visible" : "" }${ this.props.className ? " " + this.props.className : "" }`;
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
            children,
            fullHeight
        } = this.props;

        const className = `shoebuckle sidebar-pushable${ fullHeight ? " full-height" : "" }${ this.props.className ? " " + this.props.className : "" }`;
        
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

        const className = `sidebar-pusher${ this.props.className ? " " + this.props.className : "" }`;

        return (
            <div className={ className } onClick={ onClick }>
                { children }
            </div>
        );
    }
};
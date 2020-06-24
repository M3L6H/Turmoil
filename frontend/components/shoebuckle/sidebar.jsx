import React, { Component } from 'react';

import { childrenWithProps } from './util';

export default class Sidebar extends Component {
    render() {
        const {
            children,
            push,
            scale,
            thin,
            visible
        } = this.props;

        const className = `sidebar${ push ? " push" : "" }${ scale ? " scale" : "" }${ thin ? " thin" : "" }${ visible ? " visible" : "" }${ this.props.className ? " " + this.props.className : "" }`;
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
            fullHeight,
            inverted
        } = this.props;
        const childProps = { inverted };

        const className = `shoebuckle sidebar-pushable${ fullHeight ? " full-height" : "" }${ this.props.className ? " " + this.props.className : "" }`;
        
        return (
            <div className={ className }>
                { childrenWithProps(children, childProps) }
            </div>
        );
    }
};

Sidebar.Pusher = class extends Component {
    render() {
        const {
            children,
            inverted,
            onClick
        } = this.props;
        const childProps = { inverted };

        const className = `sidebar-pusher${ inverted ? " inverted" : "" }${ this.props.className ? " " + this.props.className : "" }`;

        return (
            <div className={ className } onClick={ onClick }>
                { childrenWithProps(children, childProps) }
            </div>
        );
    }
};
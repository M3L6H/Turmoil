import React, { Component } from 'react';

import { childrenWithProps } from './util';

export default class Section extends Component {
    render() {
        const { 
            children,
            horizontal,
            inverted,
            outline,
            text
        } = this.props;
        const childProps = { inverted };

        const className = `shoebuckle section${ horizontal ? " horizontal" : "" }${ inverted ? " inverted" : "" }${ outline ? " outline" : "" }${ text ? " text" : "" }${ this.props.className ? " " + this.props.className : "" }`;
        
        return (
            <section className={ className }>
                { childrenWithProps(children, childProps) }
            </section>
        );
    }
}

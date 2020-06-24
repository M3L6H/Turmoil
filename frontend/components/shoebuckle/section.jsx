import React, { Component } from 'react';

export default class Section extends Component {
    render() {
        const { 
            children,
            horizontal
        } = this.props;

        const className = `shoebuckle section${ horizontal ? " horizontal" : "" }${ this.props.className ? " " + this.props.className : "" }`;
        
        return (
            <section className={ className }>
                { children }
            </section>
        );
    }
}

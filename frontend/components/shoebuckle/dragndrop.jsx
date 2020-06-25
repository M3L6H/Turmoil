import React, { Component } from 'react';

export default class DragNDrop extends Component {
    render() {
        const {
            children,
            content
        } = this.props;

        const className = `shoebuckle dragndrop`;
        
        return (
            <div className={ className }>
                { children || content }
            </div>
        );
    }
}

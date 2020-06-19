import React, { Component } from 'react';

class Label extends Component {
    render() {
        const {
            children,
            content
        } = this.props;
        
        const className = `shoebuckle label`;
        
        return (
            <div className={ className }>
                { children || content }
            </div>
        );
    }
}

export default Label;
import React, { Component } from 'react';

export default class Message extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            visible: props.visible || true
        };
    }
    
    render() {
        const {
            children,
            content,
            header
        } = this.props;
        
        const className = `shoebuckle message`;
        
        return (
            <div className={ className }>
                { header && <Message.Header content={ header } /> }
                { children || content }
            </div>
        );
    }
}

Message.Header = props => {
    const {
        children,
        content
    } = props;

    const className = `shoebuckle message-header`;
    
    return (
        <div className={ className }>
            { children || content }
        </div>
    );
};

Message.List = props => {
    const {
        children,
        content
    } = props;

    const className = `shoebuckle message-list`;

    return (
        <ul className={ className }>
            { children || content }
        </ul>
    );
};

Message.Item = props => {
    const {
        children,
        content
    } = props;

    const className = `shoebuckle message-item`;

    return (
        <li className={ className }>
            { children || content }
        </li>
    );
};
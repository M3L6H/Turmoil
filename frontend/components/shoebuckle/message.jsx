import React, { Component } from 'react';

export default class Message extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            stateVisible: props.visible || true
        };

        this._handleDismiss = this._handleDismiss.bind(this);
    }

    _handleDismiss(e) {
        this.props.onDismiss(e, Object.assign({}, this.state));
    }
    
    render() {
        const { stateVisible } = this.state;
        
        const {
            children,
            content,
            attached,
            compact,
            floating,
            header,
            list,
            onDismiss,
            visible
        } = this.props;
        
        const className = `shoebuckle message${ attached ? ` attached-${ attached !== true ? attached : "top" }` : "" }${ compact ? " compact" : ""}${ floating ? " floating" : "" }${ ((visible !== undefined && visible) || (visible === undefined && stateVisible)) ? "" : " hidden" }`;
        
        return (
            <div className={ className }>
                { onDismiss && (
                    <span onClick={ this._handleDismiss}>
                        <i className="fa fas fa-times close-icon"></i>
                    </span>
                ) }
                { header && <Message.Header content={ header } /> }
                { children || content }
                { list && <Message.List>
                    { list.map((item, idx) => (
                        <Message.Item content={ item } key={ idx } />
                    )) }
                </Message.List> }
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
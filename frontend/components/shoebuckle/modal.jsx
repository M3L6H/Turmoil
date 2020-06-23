import React, { Component, isValidElement, cloneElement } from 'react';

export default class Modal extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            stateOpen: props.open === undefined ? false : props.open
        };

        this._handleClose = this._handleClose.bind(this);
        this._handleOpen = this._handleOpen.bind(this);
    }
    
    _handleClose() {
        document.body.classList.remove("no-scroll");
        this.setState({ stateOpen: false });
    }

    _handleOpen() {
        document.body.classList.add("no-scroll");
        this.setState({ stateOpen: true });
    }
    
    render() {
        const { stateOpen } = this.state;
        
        const {
            children,
            content
        } = this.props;

        const open = this.props.open === undefined ? stateOpen : this.props.open;
        const handleClose = this.props.handleClose || this._handleClose;

        const className = `shoebuckle modal`;

        let trigger = this.props.trigger;

        if (isValidElement(trigger)) {
            trigger = cloneElement(trigger, { onClick: this._handleOpen, ...trigger.props });
        }
        
        return (
            <>
                { trigger }

                { open && (
                    <div className="modal-wrapper">
                        <div 
                            className="modal-bg"
                            onClick={ handleClose }
                        ></div>
                        
                        <div className={ className }>
                            { children || content }
                        </div>
                    </div>
                )}
            </>
        );
    }
}

Modal.Header = props => {
    const {
        children,
        content
    } = props;
    
    return (
        <div className="modal-header">
            { children || content }
        </div>
    );
};

Modal.Content = props => {
    const {
        children,
        content 
    } = props;

    return (
        <div className="modal-content">
            { children || content }
        </div>
    );
};

Modal.Actions = props => {
    const {
        children, 
        content
    } = props;

    return (
        <div className="modal-actions">
            { children || content }
        </div>
    );
}
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
        this.setState({ stateOpen: false });
    }

    _handleOpen() {
        this.setState({ stateOpen: true });
    }
    
    render() {
        const { stateOpen } = this.state;
        
        const {
            children,
            content,
            onClose
        } = this.props;

        const open = this.props.open === undefined ? stateOpen : this.props.open;

        const className = `shoebuckle modal`;

        let trigger = this.props.trigger;

        if (isValidElement(trigger)) {
            trigger = cloneElement(trigger, { onClick: this._handleOpen, ...trigger.props });
        } else {
            console.error("Trigger is not a valid react element!", trigger);
        }
        
        return (
            <>
                { trigger }

                { open && (
                    <div className={ className }>
                        <div 
                            className="modal-bg"
                            onClose={ onClose || this._handleClose }
                        ></div>
                        { children || content }
                    </div>
                )}
            </>
        );
    }
}

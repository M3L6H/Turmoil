import React, { Component } from 'react';

export default class Modal extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            stateOpen: props.open === undefined ? false : props.open
        };

        this._handleClose = this._handleClose.bind(this);
    }
    
    _handleClose() {
        this.setState({ stateOpen: false });
    }
    
    render() {
        const { stateOpen } = this.state;
        
        const {
            children,
            content,
            onClose,
            trigger
        } = this.props;

        const open = props.open === undefined ? stateOpen : props.open;

        const className = `shoebuckle modal`;
        
        return (
            <>
                { trigger }

                { open && (
                    <div className={ className }>
                        <div 
                            className="modal-bg"
                            onClose={ onClose || this._handleClose }
                        ></div>
                        { children || { content } }
                    </div>
                )}
            </>
        );
    }
}

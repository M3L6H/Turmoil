import React, { Component, isValidElement, cloneElement } from 'react';

import { childrenWithProps } from './util';

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
            content,
            inverted
        } = this.props;
        const childProps = { inverted };

        const open = this.props.open === undefined ? stateOpen : this.props.open;
        const handleClose = this.props.handleClose || this._handleClose;

        const className = `shoebuckle modal${ inverted ? " inverted" : "" }${ this.props.className ? " " + this.props.className : "" }`;

        let trigger = this.props.trigger;

        if (isValidElement(trigger)) {
            trigger = cloneElement(trigger, { onClick: this._handleOpen, ...trigger.props });
        }

        // Render nothing if we have nothing to render
        if (!trigger && !open) {
            return  null;
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
                            { childrenWithProps(children, childProps) || content }
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
        content,
        inverted
    } = props;
    
    const className = `modal-header${ inverted ? " inverted" : "" }`;
    
    return (
        <div className={ className }>
            { children || content }
        </div>
    );
};

Modal.Content = props => {
    const {
        children,
        content,
        inverted
    } = props;
    const childProps = { inverted };
    
    const className = `modal-content${ inverted ? " inverted" : "" }`;

    return (
        <div className={ className }>
            { childrenWithProps(children, childProps) || content }
        </div>
    );
};

Modal.Actions = props => {
    const {
        children, 
        content,
        inverted
    } = props;
    const childProps = { inverted };
    
    const className = `modal-actions${ inverted ? " inverted" : "" }`;

    return (
        <div className={ className }>
            { childrenWithProps(children, childProps) || content }
        </div>
    );
}
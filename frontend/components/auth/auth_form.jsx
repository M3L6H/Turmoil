import React, { Component } from 'react';

import { Button, Form, Modal } from '../shoebuckle';

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
    
        this._handleClose = this._handleClose.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    
    _handleClose() {
        this.props.closeForm();
    }

    _handleSubmit(being) {

    }
    
    render() {
        const { formType, open } = this.props;
        
        const title = formType === "signIn" ? "Sign In" : "Sign Up";

        return (
            <Modal handleClose={ this._handleClose } open={ open }>
                <Modal.Header>{ title }</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={ this._handleSubmit }>
                        <Form.Input placeholder="Username" label="State your name, mortal" />
                        { formType === "signUp" && (
                            <Form.Input placeholder="Email" label="How may we contact you?" />
                        )}
                        <Form.Input type="password" label="What is the password?" />
                        <Button fluid green type="submit" content={ title } />
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}

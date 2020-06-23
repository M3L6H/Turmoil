import React, { Component } from 'react';

import { Button, Form, Modal } from '../shoebuckle';

export default class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: ""
        };
    
        this._handleChange = this._handleChange.bind(this);
        this._handleClose = this._handleClose.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._renderForm = this._renderForm.bind(this);
    }

    _handleChange(e) {
        const input = e.currentTarget;

        switch (input.dataset.type) {
            case "username":
            case "email":
            case "password":
                this.setState({ [input.dataset.type]: input.value });
        }
    }
    
    _handleClose() {
        this.props.closeForm();
    }

    _handleSubmit(e) {
        e.preventDefault();
        const being = Object.assign({}, this.state);
        console.log(being);
    }

    _renderForm(title) {
        const { username, email, password } = this.state;
        const { formType } = this.props;
        
        const placeholder = formType === "signIn" ? "Username or Email" : "Username";
        const label = formType === "signIn" ? "Who goes there?" : "State your name, mortal";

        return (
            <Form onSubmit={ this._handleSubmit }>
                <Form.Input 
                    placeholder={ placeholder } 
                    label={ label } 
                    data-type="username"
                    onChange={ this._handleChange }
                    value={ username }
                />
                { formType === "signUp" && (
                    <Form.Input 
                        placeholder="Email" 
                        label="How may we contact you?" 
                        data-type="email"
                        onChange={ this._handleChange }
                        value={ email }
                    />
                )}
                <Form.Input 
                    type="password" 
                    label="What is the password?" 
                    data-type="password"
                    onChange={ this._handleChange }
                    value={ password }
                />
                <Button fluid green type="submit" content={ title } />
            </Form>
        );
    }
    
    render() {
        const { open, formType } = this.props;

        const title = formType === "signIn" ? "Sign In" : "Sign Up";

        return (
            <Modal handleClose={ this._handleClose } open={ open }>
                <Modal.Header>{ title }</Modal.Header>
                <Modal.Content>
                    { this._renderForm(title) }
                </Modal.Content>
            </Modal>
        );
    }
}

import React, { Component } from 'react';

import { Button, Form, Icon, Modal } from '../shoebuckle';

export default class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            errors: []
        };
    
        this._handleChange = this._handleChange.bind(this);
        this._handleClose = this._handleClose.bind(this);
        this._handleDemoUser = this._handleDemoUser.bind(this);
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
        this.setState({ username: "", email: "", password: "", errors: [] });
    }

    _handleSubmit(e) {
        e.preventDefault();
        
        const { formType, signIn, signUp, closeForm } = this.props;
        const { username, email, password } = this.state;
        const being = {
            username,
            email,
            password
        };

        const authAction = formType === "signIn" ? signIn : signUp;
        
        authAction(being)
            .then(() => closeForm())
            .fail(jqXHR => this.setState({ errors: jqXHR.responseJSON }));
    }

    _handleDemoUser() {
        const {  signIn, closeForm } = this.props;
        signIn({ username: "DemoUser", password: "passw0rd123" })
            .then(() => closeForm());
    }

    _renderForm(title) {
        const { username, email, password, errors } = this.state;
        const { formType } = this.props;
        
        const placeholder = formType === "signIn" ? "Username or Email" : "Username";
        const label = formType === "signIn" ? "Who goes there?" : "State your name, mortal";

        return (
            <Form onSubmit={ this._handleSubmit } errors={ errors }>
                <Form.Input 
                    required={ formType === "signUp" }
                    placeholder={ placeholder } 
                    label={ label } 
                    data-type="username"
                    onChange={ this._handleChange }
                    value={ username }
                />
                { formType === "signUp" && (
                    <Form.Input 
                        required
                        placeholder="Email" 
                        label="How may we contact you?" 
                        data-type="email"
                        onChange={ this._handleChange }
                        value={ email }
                    />
                )}
                <Form.Input 
                    required={ formType === "signUp" }
                    placeholder="Password"
                    type="password" 
                    label="What is the password?" 
                    data-type="password"
                    onChange={ this._handleChange }
                    value={ password }
                />
                <Button animated fluid green type="submit">
                    <Button.Content visible>{ title }</Button.Content>
                    <Button.Content hidden>
                        <Icon name="arrow-right" />
                    </Button.Content>
                </Button>
            </Form>
        );
    }
    
    render() {
        const { open, formType, inverted } = this.props;

        const title = formType === "signIn" ? "Sign In" : "Sign Up";

        return (
            <Modal handleClose={ this._handleClose } open={ open } inverted={ inverted }>
                <Modal.Header>{ title }</Modal.Header>
                <Modal.Content>
                    { this._renderForm(title) }
                </Modal.Content>
                <Modal.Actions>
                    <Button green fluid onClick={ this._handleDemoUser }>Demo User</Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

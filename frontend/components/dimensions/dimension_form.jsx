import React, { Component } from 'react';

import { Button, Form, Icon, Modal } from '../shoebuckle';

export default class DimensionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            public: false,
            errors: []
        };
    
        this._handleChange = this._handleChange.bind(this);
        this._handleClose = this._handleClose.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._renderForm = this._renderForm.bind(this);
    }

    _handleChange(e) {
        const input = e.currentTarget;

        switch (input.dataset.type) {
            case "name":
            case "public":
                this.setState({ [input.dataset.type]: input.value });
        }
    }
    
    _handleClose() {
        this.props.closeForm();
        this.setState({ name: "", public: false, errors: [] });
    }

    _handleSubmit(e) {
        e.preventDefault();
        
        const { createDimension, closeForm } = this.props;
        const { name, public } = this.state;
        const dimension = {
            name,
            public
        };

        createDimension(dimension)
            .then(() => closeForm())
            .fail(jqXHR => this.setState({ errors: jqXHR.responseJSON }));
    }

    _renderForm() {
        const { name, public, errors } = this.state;

        return (
            <Form onSubmit={ this._handleSubmit } errors={ errors }>
                <Form.Input 
                    required
                    placeholder="Dimension Name"
                    label="Name" 
                    data-type="name"
                    onChange={ this._handleChange }
                    value={ name }
                />
                <Form.Checkbox 
                    label="Make the dimension public? (You can always change this later)" 
                    data-type="public"
                    onChange={ this._handleChange }
                    checked={ public }
                />
                <Button animated fluid green type="submit">
                    <Button.Content visible>Create Dimension!</Button.Content>
                    <Button.Content hidden>
                        <Icon name="arrow-right" />
                    </Button.Content>
                </Button>
            </Form>
        );
    }
    
    render() {
        const { open, inverted } = this.props;

        return (
            <Modal handleClose={ this._handleClose } open={ open } inverted={ inverted }>
                <Modal.Header>You Desire to Create a Dimension?</Modal.Header>
                <Modal.Content>
                    { this._renderForm(title) }
                </Modal.Content>
            </Modal>
        );
    }
}

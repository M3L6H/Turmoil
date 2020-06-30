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
        this._handleCheckbox = this._handleCheckbox.bind(this);
        this._handleClose = this._handleClose.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._renderForm = this._renderForm.bind(this);
    }

    _handleCheckbox(e) {
        const checkbox = e.currentTarget;

        switch (checkbox.dataset.type) {
            case "public":
                this.setState({ [checkbox.dataset.type]: !this.state[checkbox.dataset.type] });
        }
    }

    _handleChange(e) {
        const input = e.currentTarget;

        switch (input.dataset.type) {
            case "name":
                this.setState({ [input.dataset.type]: input.value });
        }
    }
    
    _handleClose() {
        this.props.closeForm();
        this.setState({ name: "", public: false, errors: [] });
    }

    _handleSubmit(e) {
        e.preventDefault();
        
        const { createDimension, select } = this.props;
        const { name } = this.state;
        const dimension = {
            name,
            public: this.state.public
        };

        createDimension(dimension)
            .then(this._handleClose)
            .fail(jqXHR => this.setState({ errors: jqXHR.responseJSON }));
    }

    _renderForm() {
        const { name, errors } = this.state;

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
                    label="Public"
                    data-type="public"
                    onChange={ this._handleCheckbox }
                    checked={ this.state.public }
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
                    { this._renderForm() }
                </Modal.Content>
            </Modal>
        );
    }
}

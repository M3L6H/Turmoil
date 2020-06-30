import React, { Component } from 'react';

import { Button, Form, Icon, Modal } from '../shoebuckle';

export default class RealmForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            realmType: "text",
            errors: []
        };

        this._handleClose = this._handleClose.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    
    _handleClose() {
        this.props.closeForm();
        this.setState({ name: "", realmType: "text", errors: [] });
    }
    
    _handleChange(e) {
        const input = e.currentTarget;

        switch (input.dataset.type) {
            case "name":
                this.setState({ [input.dataset.type]: input.value });
        }
    }

    _handleSubmit(e) {
        e.preventDefault();
        
        const { closeForm, dimensionId, lastOrderable, createRealm } = this.props;
        const { name, realmType } = this.state;
        const realm = {
            name,
            dimension_id: dimensionId,
            realm_type: realmType,
            prev_orderable_id: lastOrderable.id,
            prev_orderable_type: lastOrderable.type
        };

        createRealm(realm)
            .then(() => closeForm())
            .fail(jqXHR => this.setState({ errors: jqXHR.responseJSON }));
    }

    _renderForm() {
        const { name, realmType, errors } = this.state;

        return (
            <Form onSubmit={ this._handleSubmit } errors={ errors }>
                <Form.Input 
                    label="Realm Name" 
                    data-type="name"
                    onChange={ this._handleChange }
                    value={ name }
                />
                <Button animated fluid green type="submit">
                    <Button.Content visible>Create Realm</Button.Content>
                    <Button.Content hidden>
                        <Icon name="arrow-right" />
                    </Button.Content>
                </Button>
            </Form>
        );
    }
    
    render() {
        const { open, inverted, realmType } = this.props;

        return (
            <Modal handleClose={ this._handleClose } open={ open } inverted={ inverted }>
                <Modal.Header>{`Create ${ realmType === "text" ? "Text" : "Voice" } Realm`}</Modal.Header>
                <Modal.Content>
                    { this._renderForm() }
                </Modal.Content>
            </Modal>
        );
    }
}

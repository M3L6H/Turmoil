import React, { Component } from 'react';

import { Button, Form, Icon, Modal } from '../shoebuckle';

export default class EditRealmForm extends Component {
    constructor(props) {
        super(props);

        const { realm } = props;

        this.state = {
            name: realm ? realm.name : "",
            topic: realm ? realm.topic : "",
            errors: []
        };

        this._handleClose = this._handleClose.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { realm } = this.props;

        if (prevProps.realm !== realm) {
            this.setState({ name: realm.name, topic: realm.topic });
        }
    }
    
    _handleChange(e) {
        const input = e.currentTarget;

        switch (input.dataset.type) {
            case "name":
                const sanitized = input.value.toLowerCase().replace(" ", "-").replace(/[^\w\-]/, "");
                this.setState({ [input.dataset.type]: sanitized });
                break;
            case "topic":
                this.setState({ [input.dataset.type]: input.value });
                break;
        }
    }
    
    _handleClose() {
        this.props.closeForm();
        this.setState({ name: "", topic: "", errors: [] });
    }

    _handleSubmit(e) {
        e.preventDefault();
        
        const { updateRealm } = this.props;
        const { name, topic } = this.state;
        const realm = {
            name,
            topic,
            id: this.props.realm.id
        };

        updateRealm(realm)
            .then(this._handleClose)
            .fail(jqXHR => this.setState({ errors: jqXHR.responseJSON }));
    }

    _renderForm() {
        const { name, topic, errors } = this.state;

        return (
            <Form onSubmit={ this._handleSubmit } errors={ errors }>
                <Form.Input 
                    label="Realm Name" 
                    data-type="name"
                    onChange={ this._handleChange }
                    value={ name }
                />
                <Form.Textarea
                    label="Realm Topic"
                    data-type="topic"
                    onChange={ this._handleChange }
                    value={ topic }
                />
                <Button animated fluid green type="submit">
                    <Button.Content visible>Update Realm</Button.Content>
                    <Button.Content hidden>
                        <Icon name="arrow-right" />
                    </Button.Content>
                </Button>
            </Form>
        );
    }

    render() {
        const { open, inverted, realm } = this.props;

        return (
            <Modal 
                fullscreen
                handleClose={ this._handleClose } 
                open={ open } 
                inverted={ inverted }
            >
                <Modal.Header>{`Update #${ realm && realm.name }`}</Modal.Header>
                <Modal.Content>
                    { this._renderForm() }
                </Modal.Content>
            </Modal>
        );
    }
}

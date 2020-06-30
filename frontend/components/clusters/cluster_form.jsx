import React, { Component } from 'react';

import { Button, Form, Icon, Modal } from '../shoebuckle';

export default class ClusterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            errors: []
        };

        this._handleClose = this._handleClose.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    
    _handleClose() {
        this.props.closeForm();
        this.setState({ name: "", errors: [] });
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
        
        const { dimensionId, lastOrderable, createCluster } = this.props;
        const { name } = this.state;
        const cluster = {
            name,
            dimension_id: dimensionId,
            prev_orderable_id: lastOrderable.id,
            prev_orderable_type: lastOrderable.type
        };

        createCluster(cluster)
            .then(this._handleClose)
            .fail(jqXHR => this.setState({ errors: jqXHR.responseJSON }));
    }

    _renderForm() {
        const { name, errors } = this.state;

        return (
            <Form onSubmit={ this._handleSubmit } errors={ errors }>
                <Form.Input 
                    label="Cluster Name" 
                    data-type="name"
                    onChange={ this._handleChange }
                    value={ name }
                />
                <Button animated fluid green type="submit">
                    <Button.Content visible>Create Cluster</Button.Content>
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
                <Modal.Header>Create Cluster</Modal.Header>
                <Modal.Content>
                    { this._renderForm() }
                </Modal.Content>
            </Modal>
        );
    }
}

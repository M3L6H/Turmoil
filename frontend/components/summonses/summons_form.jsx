import React, { Component } from 'react';
import base64url from 'base64-url';

import { Button, Form, Icon, Modal } from '../shoebuckle';

export default class SummonsForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: this._generateUrl(),
            expireAfter: 1440,
            maxUses: "",
            errors: []
        };

        this._handleClose = this._handleClose.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _generateUrl() {
        return base64url.encode(`dimension-${ this.props.dimensionId }-${ Math.random() }`);
    }

    _resetForm() {
        this.setState({ url: this._generateUrl(), expireAfter: 1440, maxUses: "", errors: [] });
    }
    
    _handleClose() {
        this.props.closeForm();
        this._resetForm();
    }
    
    _handleChange(e) {
        const input = e.currentTarget;

        switch (input.dataset.type) {
            case "expireAfter":
            case "maxUses":
            case "url":
                this.setState({ [input.dataset.type]: input.value });
        }
    }

    _handleSubmit(e) {
        e.preventDefault();
        
        const { dimensionId, createSummons } = this.props;
        const { url, expireAfter, maxUses } = this.state;
        const summons = {
            url,
            dimension_id: dimensionId,
            expire_after: expireAfter,
            max_uses: maxUses
        };

        createSummons(summons)
            .then(this._handleClose)
            .fail(jqXHR => this.setState({ errors: jqXHR.responseJSON }));
    }

    _pluralize(num, word) {
        if (num == 0) {
            return `${ num } ${ word }`;
        } else {
            return `${ num } ${ word }s`;
        }
    }

    _parseExpiry() {
        const { expireAfter } = this.state;

        if (isNaN(expireAfter)) {
            return "does not expire";
        } else if (expireAfter < 60) {
            return `expires in ${ this._pluralize(expireAfter, "minute") }`;
        } else if (expireAfter < 1440) {
            return `expires in ${ this._pluralize(Math.round(expireAfter / 60), "hour") }`;
        } else if (expireAfter < 525600) {
            return `expires in ${ this._pluralize(Math.round(expireAfter / 1440), "day") }`;
        } else {
            return `expires in ${ this._pluralize(Math.round(expireAfter / 525600), "year") }`;
        }
    }

    _renderEditForm() {
        const { expireAfter, maxUses, errors } = this.state;

        return (
            <Form errors={ errors }>
                
                <Button animated fluid green type="submit">
                    <Button.Content visible>Generate Summons!</Button.Content>
                    <Button.Content hidden>
                        <Icon name="arrow-right" />
                    </Button.Content>
                </Button>
            </Form>
        )
    }

    _renderUrlForm() {
        const { url, errors } = this.state;

        return (
            <Form errors={ errors }>
                <Form.Input 
                    label="Summons Link" 
                    data-type="url"
                    readonly
                    onChange={ this._handleChange }
                    value={ `${ window.protocol }//${ window.location.host }/join/${ url }` }
                />
                <Form.Note>
                    Your summons link { this._parseExpiry() }. <a onClick={ this._openEdit }>Edit summons link</a>
                </Form.Note>
            </Form>
        );
    }

    _renderForm() {
        const { formType } = this.props;
        return formType === "url" ? this._renderUrlForm() : null;
    }
    
    render() {
        const { open, inverted } = this.props;

        return (
            <Modal handleClose={ this._handleClose } open={ open } inverted={ inverted }>
                <Modal.Header>Create Summons</Modal.Header>
                <Modal.Content>
                    { this._renderForm() }
                </Modal.Content>
            </Modal>
        );
    }
}

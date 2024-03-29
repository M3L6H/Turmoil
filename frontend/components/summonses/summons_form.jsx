import React, { Component } from 'react';
import base64url from 'base64-url';

import withWindowDimensions from '../hocs/with_window_dimensions';

import { Button, Form, Icon, Modal } from '../shoebuckle';

class SummonsForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: this._generateUrl(),
            expireAfter: "1440",
            maxUses: "noLimit",
            errors: [],
            copied: false
        };

        this._copyUrl = this._copyUrl.bind(this);
        this._handleClose = this._handleClose.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _copyUrl(e) {
        e.preventDefault();

        const input = document.querySelector("input[data-type='url']");

        input.select();
        input.setSelectionRange(0, 99999); // For mobile

        document.execCommand("copy");

        this.setState({ copied: true });

        setTimeout(() => this.setState({ copied: false }), 1000);
    }

    _generateUrl() {
        return base64url.encode(`${ this.props.dimensionId }-${ Math.random() }`);
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
        
        const { dimensionId, createSummons, updateSummons, openUrlForm, formType } = this.props;
        const { url, expireAfter, maxUses } = this.state;
        const summons = {
            url,
            dimension_id: dimensionId,
            expire_after: expireAfter === "never" ? null : expireAfter,
            max_uses: maxUses === "noLimit" ? null : maxUses
        };

        const action = formType === "new" ? createSummons : updateSummons;
        
        action(summons)
            .then(openUrlForm)
            .fail(jqXHR => this.setState({ errors: jqXHR.responseJSON }));
    }

    _pluralize(num, word) {
        if (num == 1) {
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
        const { desktop } = this.props;
        const { expireAfter, maxUses, errors } = this.state;

        return (
            <Form errors={ errors } onSubmit={ this._handleSubmit }>
                <Form.Select 
                    label="Expire after"
                    placeholder="Select..."
                    selected={ expireAfter }
                    onChange={ this._handleChange }
                    data-type="expireAfter"
                    options={ [
                        { value: "30", label: desktop ? "30 minutes" : "30 mins" },
                        { value: "60", label: "1 hour" },
                        { value: "360", label: "6 hours" },
                        { value: "720", label: "12 hours" },
                        { value: "1440", label: "1 day" },
                        { value: "1080", label: "1 week" },
                        { value: "43200", label: "1 month" },
                        { value: "525600", label: "1 year" },
                        { value: "never", label: "Never" }
                    ] }
                />
                <Form.Select 
                    label="Max number of uses"
                    placeholder="Select..."
                    selected={ maxUses }
                    onChange={ this._handleChange }
                    data-type="maxUses"
                    options={ [
                        { value: "noLimit", label: desktop ? "No limit" : "∞" },
                        { value: "1", label: desktop ? "1 use" : "1" },
                        { value: "5", label: desktop ? "5 uses" : "5" },
                        { value: "10", label: desktop ? "10 uses" : "10" },
                        { value: "25", label: desktop ? "25 uses" : "25" },
                        { value: "50", label: desktop ? "50 uses" : "50" },
                        { value: "100", label: desktop ? "100 uses" : "100" }
                    ] }
                />
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
        const { openEditForm, inverted } = this.props;
        const { url, errors, copied } = this.state;

        return (
            <Form errors={ errors }>
                <Form.Input 
                    label="Summons Link" 
                    data-type="url"
                    readOnly
                    onChange={ this._handleChange }
                    value={ `${ window.location.protocol }//${ window.location.host }/join/${ url }` }
                    button={
                        <Button
                            content={ copied ? "Copied" : "Copy" }
                            primary={ !copied }
                            green={ copied }
                            onClick={ this._copyUrl }
                            inverted={ inverted }
                        />
                    }
                />
                <Form.Note>
                    Your summons link { this._parseExpiry() }. <a onClick={ openEditForm }>Edit summons link</a>
                </Form.Note>
            </Form>
        );
    }

    _renderForm() {
        const { formType } = this.props;
        return formType === "url" ? this._renderUrlForm() : this._renderEditForm();
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

export default withWindowDimensions(SummonsForm);
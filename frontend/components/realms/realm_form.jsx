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
        const sanitized = input.value.toLowerCase().replace(" ", "-").replace(/[^\w\-]/, "");
        this.setState({ [input.dataset.type]: sanitized });
        break;
      case "realmType":
        this.setState({ [input.dataset.type]: input.value || input.dataset.value });
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    
    const { dimensionId, firstOrderable, createRealm } = this.props;
    const { name, realmType } = this.state;
    const realm = {
      name,
      dimension_id: dimensionId,
      realm_type: realmType,
      next_orderable_id: firstOrderable.id,
      next_orderable_type: firstOrderable.type
    };

    createRealm(realm)
      .then(this._handleClose)
      .fail(jqXHR => this.setState({ errors: jqXHR.responseJSON }));
  }

  _renderForm() {
    const { name, realmType, errors } = this.state;

    // ,
    //                 { value: "voice", label: <><Icon name="microphone" />Voice Realm</> }

    return (
      <Form onSubmit={ this._handleSubmit } errors={ errors }>
        <Form.RadioGroup 
          label="Realm Type"
          data-type="realmType"
          onChange={ this._handleChange }
          selected={ realmType }
          options={[
              { value: "text", label: <><Icon name="hashtag" />Text Realm</> }
          ]}
        />
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
    const { realmType } = this.state;
    const { open, inverted } = this.props;

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

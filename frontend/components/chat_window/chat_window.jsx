import React, { Component } from 'react';

import { Button, Form, Icon, Section } from '../shoebuckle';

import Missive from '../missive';

export default class ChatWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ""
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  
  componentDidMount() {
    const { cable, receiveMissive, selectedRealm, conversation } = this.props;

    if (selectedRealm) {
      this.subscription = cable.subscriptions.create({
        channel: "RealmChannel",
        realm: selectedRealm.id
      },
      {
        received: receiveMissive
      });
    } else {
      this.subscription = cable.subscriptions.create({
        channel: "ConversationChannel",
        conversation: conversation.id
      },
      {
        received: receiveMissive
      });
    }
  }
  

  componentDidUpdate(prevProps, prevState) {
    const { cable, receiveMissive, selectedRealm, conversation } = this.props;

    if ((selectedRealm && (!prevProps.selectedRealm || prevProps.selectedRealm.id !== selectedRealm.id)) || (conversation && (!prevProps.conversation || prevProps.conversation.id !== conversation.id))) {
      if (this.subscription) {
        cable.subscriptions.remove(this.subscription);
      }
      
      if (selectedRealm) {
        this.subscription = cable.subscriptions.create({
          channel: "RealmChannel",
          realm: selectedRealm.id
        },
        {
          received: receiveMissive
        });
      } else {
        this.subscription = cable.subscriptions.create({
          channel: "ConversationChannel",
          conversation: conversation.id
        },
        {
          received: receiveMissive
        });
      }
    }
  }

  _handleChange(e) {
    const input = e.currentTarget;

    switch(input.dataset.type) {
      case "body":
        this.setState({ [input.dataset.type]: input.value });
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    
    const { body } = this.state;
    const { selectedRealm, conversation } = this.props;
    
    if (body !== "") {
      const missive = { 
        body,
        messageable_id: selectedRealm ? selectedRealm.id : conversation.id,
        messageable_type: selectedRealm ? "Realm" : "Conversation"
      };

      this.props.createMissive(missive);
      this.setState({ body: "" });
    }
  }

  _renderMissives() {
    const { missives, inverted } = this.props;

    const missiveGroups = missives.reduce((arr, missive) => {
      const date = new Date(missive.createdAt || missive.created_at);
      if (arr.length > 0 && 
        arr[arr.length - 1][0].username === missive.username &&
        (date - new Date(arr[arr.length - 1][arr[arr.length - 1].length - 1].createdAt || arr[arr.length - 1][arr[arr.length - 1].length - 1].created_at)) / 60000 <= 1
      ) {
        arr[arr.length - 1].push(missive);
      } else {
        arr.push([missive]);
      }

      return arr;
    }, []);

    return missiveGroups.map(missives => (
      <Missive key={ missives[0].id } missives={ missives } inverted={ inverted } />
    ));
  }
  
  render() {
    const {
      body
    } = this.state;

    const {
      inverted,
      selectedRealm,
      conversation,
      currentBeingId
    } = this.props;

    if ((!selectedRealm && !conversation) || !currentBeingId) {
      return (
        <Section
          className="chat-window"
          inverted={ inverted }
        >
          <Form className="chat-bar" onSubmit={ this._handleSubmit }>
            <Form.Input 
              data-type="body" 
              value={ body }
              onChange={ this._handleChange } 
            />
            { body !== "" && (
              <Button type="submit" icon>
                <Icon name="arrow-alt-circle-right" primary large />
              </Button>
            ) }
          </Form>
        </Section>
      );
    }
    
    return (
      <Section 
        className="chat-window" 
        inverted={ inverted } 
      >
        <div className="missives">
          { this._renderMissives() }
        </div>
        <Form className="chat-bar" onSubmit={ this._handleSubmit }>
          <Form.Input 
            data-type="body" 
            placeholder={ `message ${ selectedRealm ? "#" + selectedRealm.name : "conversation participants" }` }
            value={ body }
            onChange={ this._handleChange } 
          />
          { body !== "" && (
            <Button type="submit" icon>
              <Icon name="arrow-alt-circle-right" primary large />
            </Button>
          ) }
        </Form>
      </Section>
    );
  }
}

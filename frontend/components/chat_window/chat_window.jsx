import React, { Component } from 'react';

import { Button, Form, Icon, Section } from '../shoebuckle';

export default class ChatWindow extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            body: ""
        };

        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    
    _handleChange(e) {
        const input = e.currentTarget;

        switch(input.dataset.type) {
            case "body":
                this.setState({ [input.dataset.type]: input.value });
        }
    }

    _handleSubmit() {
        const { body } = this.state;
        const { selectedRealm } = this.props;
        
        if (body !== "") {
            const missive = { 
                body,
                messageable_id: selectedRealm.id,
                messageable_type: "Realm"
            };

            this.props.createMissive(missive);
            this.setState({ body: "" });
        }
    }
    
    render() {
        const {
            body
        } = this.state;

        const {
            inverted,
            selectedRealm
        } = this.props;

        if (!selectedRealm) return null;
        
        return (
            <Section className="chat-window" inverted={ inverted }>
                <Form className="chat-bar" onSubmit={ this._handleSubmit }>
                    <Form.Input 
                        dataset-type="body" 
                        placeholder={ `message #${ selectedRealm.name }` }
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

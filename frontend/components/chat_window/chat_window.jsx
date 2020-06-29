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

    componentDidUpdate(prevProps, prevState) {
        const { cable, receiveMissive, selectedRealm } = this.props;

        if (prevProps.selectedRealm !== selectedRealm) {
            cable.subscriptions.create({
                channel: "RealmChannel",
                realm: selectedRealm.id
            },
            {
                received: receiveMissive
            })
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

    _renderMissives() {
        const { missives, inverted } = this.props;


        return missives.map(missive => (
            <Missive key={ missive.id } missive={ missive } inverted={ inverted } />
        ));
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

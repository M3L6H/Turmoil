import React, { Component } from 'react';

import { Button, Header, Section } from '../shoebuckle';

import AppHeader from '../app_header';
import Bubbles from '../bubbles';

export default class Splash extends Component {
    render() {
        const { signUp, signIn, openSignUp, inverted } = this.props;

        return (<>
            <AppHeader />
            <Bubbles />
            <Section text inverted={ inverted }>
                <Header as="h1" primary >Where chaos brews</Header>
                <p>Whether you're a powerful overlord, a devious spy, tyrannical organization, or just a group of compatriots looking to spend time together, Turmoil makes it simple to chat every day and hang out more often.</p>
                <Button onClick={ openSignUp } content="Sign Up" pill black />
            </Section>
        </>);
    }
}

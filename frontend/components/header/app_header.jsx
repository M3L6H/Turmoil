import React, { Component } from 'react';

import { Button, Header, Icon } from '../shoebuckle';

import AuthForm from '../auth/auth_form';

export default class AppHeader extends Component {
    constructor(props) {
        super(props)
    
        this._renderAuthButtons = this._renderAuthButtons.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        console.log("called");
        this.props.openSidebar();
    }
    
    _renderAuthButtons() {
        const {
            currentBeingId,
            openSignIn,
            openSignUp,
            signOut
        } = this.props;

        if (currentBeingId) {
            return (
                <li><Button basic accent compact pill onClick={ signOut }>Sign Out</Button></li>
            );
        } else {
            return (
                <>
                    <li><Button basic accent compact pill onClick={ openSignIn }>Sign In</Button></li>
                    <li><Button basic accent compact pill onClick={ openSignUp }>Sign Up</Button></li>
                </>
            );
        }
    }
    
    render() {
        const { 
            currentBeingId,
            open, 
            formType,
            closeForm,
            signIn,
            signUp
        } = this.props;
        
        return (
            <header className="app-header">
                { currentBeingId ? (
                    <Icon name="bars" primary large onClick={ this._handleClick } />
                ) : (
                    <Header as="h2" primary link to="/">Chaos</Header>
                ) }
                <nav className="header-nav">
                    <ul>
                        { this._renderAuthButtons() }
                    </ul>
                </nav>

                <AuthForm 
                    open={ open }
                    formType={ formType }
                    closeForm={ closeForm }
                    signIn={ signIn }
                    signUp={ signUp }
                />
            </header>
        );
    }
}

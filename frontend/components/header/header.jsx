import React, { Component } from 'react';

import { Button } from '../shoebuckle';

import AuthForm from '../auth/auth_form';

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this._renderAuthButtons = this._renderAuthButtons.bind(this);
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
                <li><Button basic compact pill onClick={ signOut }>Sign Out</Button></li>
            );
        } else {
            return (
                <>
                    <li><Button basic compact pill onClick={ openSignIn }>Sign In</Button></li>
                    <li><Button basic compact pill onClick={ openSignUp }>Sign Up</Button></li>
                </>
            );
        }
    }
    
    render() {
        const { 
            open, 
            formType,
            closeForm,
            signIn,
            signUp
        } = this.props;
        
        return (
            <header className="app-header">
                <h2>Chaos</h2>
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

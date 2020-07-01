import React, { Component } from 'react';

import withWindowDimensions from '../hocs/with_window_dimensions';

import { Button, Header, Icon } from '../shoebuckle';

import AuthForm from '../auth/auth_form';

class AppHeader extends Component {
    constructor(props) {
        super(props)
    
        this._renderAuthButtons = this._renderAuthButtons.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        this.props.openSidebar();
    }
    
    _renderAuthButtons() {
        const {
            currentBeingId,
            inverted,
            openSignIn,
            openSignUp,
            signOut
        } = this.props;

        if (currentBeingId) {
            return (
                <li><Button basic accent compact pill inverted={ inverted } onClick={ signOut }>Sign Out</Button></li>
            );
        } else {
            return (
                <>
                    <li><Button basic accent compact pill inverted={ inverted } onClick={ openSignIn }>Sign In</Button></li>
                    <li><Button basic accent compact pill inverted={ inverted } onClick={ openSignUp }>Sign Up</Button></li>
                </>
            );
        }
    }
    
    render() {
        const { 
            currentBeingId,
            desktop,
            inverted,
            open, 
            openSignIn,
            openSignUp,
            formType,
            closeForm,
            signIn,
            signUp,
            simple
        } = this.props;
        
        return (
            <header className="app-header">
                { currentBeingId && !desktop && !simple ? (
                    <Icon name="bars" primary large onClick={ this._handleClick } />
                ) : (
                    <Header as="h2" primary link={ !simple } to={ simple ? false : "/" }>
                        <Icon name="fire" />Turmoil
                    </Header>
                ) }
                { !simple && (
                    <nav className="header-nav">
                        <ul>
                            { this._renderAuthButtons() }
                        </ul>
                    </nav>
                ) }

                <AuthForm 
                    open={ open }
                    formType={ formType }
                    closeForm={ closeForm }
                    openSignIn={ openSignIn }
                    openSignUp={ openSignUp }
                    signIn={ signIn }
                    signUp={ signUp }
                    inverted={ inverted }
                />
            </header>
        );
    }
}


export default withWindowDimensions(AppHeader);
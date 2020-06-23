import React, { Component } from 'react';

import { Button } from '../shoebuckle';

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this._renderAuthButtons = this._renderAuthButtons.bind(this);
    }
    
    
    _renderAuthButtons() {
        const {
            currentBeingId,
            openSignIn,
            closeSignIn,
            openSignUp,
            closeSignUp,
            logout
        } = this.props;

        if (currentBeingId) {
            return (
                <li><Button pill onClick={ signOut }>Sign Out</Button></li>
            );
        } else {
            return (
                <>
                    <li><Button pill onClick={ openSignIn }>Sign In</Button></li>
                    <li><Button pill onClick={ openSignUp }>Sign Up</Button></li>
                </>
            );
        }
    }
    
    render() {
        
        return (
            <header>
                <h2>Chaos</h2>
                <nav>
                    <ul>
                        { this._renderAuthButtons() }
                    </ul>
                </nav>
            </header>
        );
    }
}

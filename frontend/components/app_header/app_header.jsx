import React, { Component } from 'react';

import { Button } from '../shoebuckle';

class AppHeader extends Component {
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
    return (
      <ul>
        { this._renderAuthButtons() }
      </ul>
    );
  }
}


export default AppHeader;

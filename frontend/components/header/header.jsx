import React from 'react';

import withWindowDimensions from '../hocs/with_window_dimensions';

import { Header, Icon } from '../shoebuckle'

import AuthForm from '../auth/auth_form';

import AppHeader from '../app_header';
import ConversationHeader from '../conversation_header';
import FriendsHeader from '../friends_header';

const TopHeader = ({
  header,
  open,
  formType,
  closeForm,
  openSignIn,
  openSignUp,
  signIn,
  signUp,
  inverted,
  openSidebar,
  simple,
  desktop,
  currentBeingId
}) => {
  let Options;
  switch (header) {
    case "conversation":
      Options = ConversationHeader;
      break;
    case "friends":
      Options = FriendsHeader;
      break;
    default:
      Options = AppHeader;
  }

  return (
    <header className="app-header">
      { currentBeingId && !desktop && !simple ? (
        <Icon name="bars" primary large onClick={ openSidebar } />
      ) : (
        <Header as="h2" primary link={ !simple } to={ simple ? false : "/" }>
          <Icon name="fire" />Turmoil
        </Header>
      ) }
      { !simple && (
        <nav className="header-nav">
          <Options />
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
};

export default withWindowDimensions(TopHeader);

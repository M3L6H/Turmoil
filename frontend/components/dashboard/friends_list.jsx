import React from 'react';

import { Header, Icon, Section } from '../shoebuckle';

export default ({ comrades, inverted, tab, openFriendsModal }) => {
  comrades = comrades.filter(({ pending, blocked }) => !(pending || blocked ));

  let header;

  switch (tab) {
    case "blocked":
      header = (
        <Header as="h3" inverted={ inverted }>Blocked Entities</Header>
      );
      break;
    case "invites":
      header = (
        <Header as="h3" inverted={ inverted }>Comrade Invites</Header>
      );
      break;
    default:
      header = (
        <div className="friends-list-header-container">
          <Header as="h3" inline inverted={ inverted }>All Comrades</Header>
          <Icon large name="plus" onClick={ openFriendsModal } />
        </div>
      );
  }

  return (
    <Section inverted={ inverted } className="friends-list-section">
      { header }
    </Section>
  );
};

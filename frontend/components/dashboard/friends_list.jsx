import React from 'react';

import { Header, Icon, Section } from '../shoebuckle';

import FriendEntry from './friend_entry';

export default ({
  beings,
  currentBeingId,
  comrades,
  comradeBeings,
  inverted,
  tab,
  openFriendsModal
}) => {
  let header;
  let comradesList;

  switch (tab) {
    case "blocked":
      header = (
        <Header as="h3" inverted={ inverted }>Blocked Entities</Header>
      );
      comradesList = comrades.filter(({ blocked }) => blocked).concat(
        comradeBeings.filter(({ blocked }) => blocked));
      break;
    case "invites":
      header = (
        <Header as="h3" inverted={ inverted }>Comrade Invites</Header>
      );
      comradesList = comrades.filter(({ pending, blocked }) => pending && !blocked).concat(
        comradeBeings.filter(({ pending, blocked }) => pending && !blocked));
      break;
    default:
      header = (
        <div className="friends-list-header-container">
          <Header as="h3" inline inverted={ inverted }>All Comrades</Header>
          <Icon large name="plus" onClick={ openFriendsModal } />
        </div>
      );
      comradesList = comrades.filter(({ pending, blocked }) => !(pending || blocked)).concat(
        comradeBeings.filter(({ pending, blocked }) => !(pending || blocked)));
  }

  return (
    <Section inverted={ inverted } className="friends-list-section">
      { header }
      <div className="friends-list-container">
        { comradesList.map(comrade => (
          <FriendEntry
            key={ comrade.id }
            comrade={ comrade }
            beings={ beings }
            currentBeingId={ currentBeingId }
          />
        )) }
      </div>
    </Section>
  );
};

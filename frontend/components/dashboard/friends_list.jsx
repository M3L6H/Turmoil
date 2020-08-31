import React from 'react';

import { Header, Icon, Section } from '../shoebuckle';

export default ({
  beings,
  comrades,
  comradeBeings,
  inverted,
  tab,
  openFriendsModal
}) => {
  comrades = comrades.filter(({ pending, blocked }) => !(pending || blocked ));

  let header;
  let comradesList;

  switch (tab) {
    case "blocked":
      header = (
        <Header as="h3" inverted={ inverted }>Blocked Entities</Header>
      );
      comradesList = comrades.filter(({ blocked }) => blocked) +
        comradeBeings.filter(({ blocked }) => blocked);
      break;
    case "invites":
      header = (
        <Header as="h3" inverted={ inverted }>Comrade Invites</Header>
      );
      comradesList = comrades.filter(({ pending, blocked }) => pending && !blocked) +
        comradeBeings.filter(({ pending, blocked }) => pending && !blocked);
      break;
    default:
      header = (
        <div className="friends-list-header-container">
          <Header as="h3" inline inverted={ inverted }>All Comrades</Header>
          <Icon large name="plus" onClick={ openFriendsModal } />
        </div>
      );
      comradesList = comrades.filter(({ pending, blocked }) => !(pending || blocked)) +
        comradeBeings.filter(({ pending, blocked }) => !(pending || blocked));
  }

  comradesList = comradesList || [];

  return (
    <Section inverted={ inverted } className="friends-list-section">
      { header }
      { comradesList.map(c => (
        <Section></Section>
      )) }
    </Section>
  );
};

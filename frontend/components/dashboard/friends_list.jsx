import React from 'react';

import { Header, Icon, Section } from '../shoebuckle';

export default ({ comrades, inverted, tab }) => {
  comrades = comrades.filter(({ pending, blocked }) => !(pending || blocked ));

  let header;

  switch (tab) {
    default:
      header = (
        <div className="friends-list-header-container">
          <Header as="h3" inline inverted={ inverted }>All Friends</Header>
          <Icon large name="plus" />
        </div>
      );
  }

  return (
    <Section inverted={ inverted } className="friends-list-section">
      { header }
    </Section>
  );
};

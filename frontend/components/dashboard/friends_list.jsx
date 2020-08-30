import React from 'react';

import { Header, Section } from '../shoebuckle';

export default ({ comrades, inverted }) => {
  comrades = comrades.filter(({ pending, blocked }) => !(pending || blocked ));

  return (
    <Section inverted={ inverted } className="friends-list-section">
      <Header as="h3" inverted={ inverted }>All Friends</Header>
    </Section>
  );
};

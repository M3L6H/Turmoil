import React from 'react';

import { Icon, Section } from '../shoebuckle';

export default ({ beings, comrade, currentBeingId }) => {
  let pendingIcon;
  let being;
  
  if (comrade.beingId === currentBeingId) {
    pendingIcon = (
      <Icon.Group large>
        <Icon
          name="envelope"
          transform="left-6"
        />
        <Icon
          name="angle-double-right"
          transform="right-11"
        />
      </Icon.Group>
    );

    being = beings[comrade.comradeId];
  }
  else {
    pendingIcon = (
      <Icon.Group large>
        <Icon
          name="envelope"
          transform="left-6"
        />
        <Icon
          name="angle-double-left"
          transform="right-11"
        />
      </Icon.Group>
    );

    being = beings[cormade.beingId];
  }

  return (
    <Section horizontal className="friend-entry">
      { comrade.pending && pendingIcon }
      <span className="friend-name">{ being.username }</span>
    </Section>
  );
};

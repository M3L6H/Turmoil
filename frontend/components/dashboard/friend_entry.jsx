import React from 'react';

import { Icon, Section } from '../shoebuckle';

export default ({ beings, comrade, currentBeingId }) => {
  let pendingIcon;
  let being;
  let iconSet;
  
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

    if (comrade.pending) {
      iconSet = (
        <span className="friend-entry-icon-set">
          <Icon large name="times" />
        </span>
      );
    }
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

    if (comrade.pending) {
      iconSet = (
        <span className="friend-entry-icon-set">
          <Icon large name="check" />
          <Icon large name="times" />
        </span>
      );
    }
  }

  return (
    <Section horizontal className="friend-entry">
      { comrade.pending && pendingIcon }
      <span className="friend-name">{ being.username }</span>
      { iconSet }
    </Section>
  );
};

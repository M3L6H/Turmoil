import React from 'react';

import { Icon, Section } from '../shoebuckle';

export default ({
  beings,
  comrade,
  currentBeingId,
  deleteComrade,
  updateComrade
}) => {
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
          <Icon
            large
            name="times"
            red
            onClick={ () => deleteComrade(comrade.id) }
          />
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

    being = beings[comrade.beingId];

    if (comrade.pending) {
      iconSet = (
        <span className="friend-entry-icon-set">
          <Icon
            large
            name="check"
            green
            onClick={ () => updateComrade({ ...comrade, pending: false }, true) }
          />
          <Icon
            large
            name="times"
            red
            onClick={ () => deleteComrade(comrade.id) }
          />
        </span>
      );
    }
  }

  if (!comrade.pending && !comrade.blocked) {
    iconSet = (
      <span className="friend-entry-icon-set">
        <Icon
          large
          name="user-minus"
          red
          onClick={ () => deleteComrade(comrade.id) }
        />
      </span>
    );
  }

  return (
    <Section horizontal className="friend-entry">
      { comrade.pending && pendingIcon }
      { !comrade.pending && <Icon name="user" large /> }
      <span className="friend-name">{ being.username }</span>
      { iconSet }
    </Section>
  );
};

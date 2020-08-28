import React from 'react';

import { Icon } from '../shoebuckle';

export default ({ currentBeingId, being, comrades, comradeBeings }) => {
  
  let comrade = null;

  // Look for a corresponding comrade
  comrades.forEach(c => {
    if (c.comradeId === being.id) comrade = c;
  });
  comradeBeings.forEach(c => {
    if (c.beingId === being.id) comrade = c;
  });

  let icon = null;

  // If the comrade exists, there are several possibilities:
  // 1. We have sent an invite and the invite is pending
  // 2. They have sent an invite and the invite is pending
  // 3. We are already friends
  // 4. We are blocked or they have blocked us
  if (comrade) {
    // There is a pending invite
    if (comrade.pending)   {
      // We sent the invite
      if (comrade.beingId === currentBeingId) {
        icon = (
          <Icon.Group>
            <Icon
              name="envelope"
            />
            <Icon
              name="arrow-right"
              color="primary"
              transform="shrink-10 right-5"
            />
          </Icon.Group>
        );
      }
      // They sent the invite
      else {
        icon = (
          <Icon.Group>
            <Icon
              name="envelope"
            />
            <Icon
              name="arrow-left"
              color="primary"
              transform="shrink-6"
            />
          </Icon.Group>
        );
      }
    }
  } else {
    icon = (
      <Icon
        name="user-plus"
        onClick={ () => createComrade({
          being_id: currentBeingId,
          comrade_id: being.id,
          blocked: false,
          pending: true
        }) }
      />
    );
  }

  return icon;
};

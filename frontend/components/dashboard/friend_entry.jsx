import React from 'react';

import { Icon, Section } from '../shoebuckle';

export default ({
  beings,
  comrade,
  currentBeingId,
  deleteComrade,
  updateComrade,
  createConversation,
  createBeingConversation
}) => {
  let pendingIcon;
  let being;
  let iconSet;

  const blockButton = (
    <Icon
      large
      name="user-slash"
      red
      onClick={ () => updateComrade({ ...comrade, blocked: currentBeingId }, comrade.beingId !== currentBeingId) }
    />
  );

  const cancelButton = (
    <Icon
      large
      name="times"
      red
      onClick={ () => deleteComrade(comrade.id, comrade.beingId !== currentBeingId) }
    />
  );

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
          { cancelButton }
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
          { cancelButton }
          { blockButton }
        </span>
      );
    }
  }

  if (!comrade.pending && !comrade.blocked) {
    iconSet = (
      <span className="friend-entry-icon-set">
        <Icon
          large
          name="comment-medical"
          green
          onClick={ () => {
            createConversation({ being_id: currentBeingId })
              .then((data) => {
                console.log(data);
                const { conversation } = data;
                createBeingConversation({ being_id: comrade.being_id === currentBeingId ? comrade.comradeId : comrade.beingId, conversation_id: conversation.id });
              });
          } }
        />
        <Icon
          large
          name="user-minus"
          red
          onClick={ () => deleteComrade(comrade.id, comrade.beingId !== currentBeingId) }
        />
        { blockButton }
      </span>
    );
  } else if (comrade.blocked) {
    iconSet = (
      <span className="friend-entry-icon-set">
        <Icon
          large
          name="user-plus"
          green
          onClick={ () => updateComrade({ ...comrade, blocked: null }, comrade.beingId !== currentBeingId) }
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

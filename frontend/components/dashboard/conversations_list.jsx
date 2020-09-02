import React from 'react';

import { Menu } from '../shoebuckle';

import truncate from '../../util/truncate';

export default ({ beings, conversations, beingConversations }) => {

  return (
    <>
      { conversations.map(conv => (
        <Menu.Item key={ conv.id }>
          { truncate(beingConversations.map(({ beingId }) => beings[beingId].username).concat([beings[conv.beingId].username]).join(", ")) }
        </Menu.Item>
      )) }
    </>
  );
};

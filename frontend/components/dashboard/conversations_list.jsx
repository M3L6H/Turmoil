import React from 'react';

import { Menu } from '../shoebuckle';

import truncate from '../../util/truncate';

export default ({
  beings,
  fetchConversation,
  conversations,
  beingConversations,
  dashboard,
  receiveDashboardSelection,
  receiveHeader
}) => {

  return (
    <Menu.Menu fluid vertical inverted className="conversation-list">
      { conversations.map(conv => (
        <Menu.Item
          active={ dashboard.conversation === conv.id }
          key={ conv.id }
          onClick={ () => {
            receiveDashboardSelection({ selected: "conversation", conversation: conv.id });
            receiveHeader("conversation");
            fetchConversation(conv.id);
          } }
        >
          { truncate(beingConversations.filter(({ conversationId }) => conversationId === conv.id).map(({ beingId }) => beings[beingId].username).concat([beings[conv.beingId].username]).join(", ")) }
        </Menu.Item>
      )) }
    </Menu.Menu>
  );
};

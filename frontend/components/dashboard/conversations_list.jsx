import React from 'react';

import { Icon, Menu } from '../shoebuckle';

import truncate from '../../util/truncate';

export default ({
  currentBeingId,
  beings,
  fetchConversation,
  deleteConversation,
  deleteBeingConversation,
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
          <span className="conversation-name">
            { truncate(beingConversations.filter(({ conversationId }) => conversationId === conv.id).map(({ beingId }) => beings[beingId].username).concat([beings[conv.beingId].username]).join(", ")) }
          </span>
          <Icon
            name="times"
            className="delete-conversation"
            onClick={ (e) => {
              e.stopPropagation();
              if (currentBeingId === conv.beingId) {
                deleteConversation(conv.id);
              } else {
                beingConversations.forEach((bc) => {
                  if (bc.beingId === currentBeingId && bc.conversationId === conv.id) {
                    deleteBeingConversation(bc);
                  }
                });
              }
            } }
          />
        </Menu.Item>
      )) }
    </Menu.Menu>
  );
};

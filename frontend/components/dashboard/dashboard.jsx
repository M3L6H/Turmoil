import React from 'react';

import ChatWindow from '../chat_window';
import FriendsList from './friends_list_container';

export default ({ dashboard, ...otherProps }) => {
  switch (dashboard.selected) {
    case "conversation":
      return <ChatWindow { ...otherProps } />
    default:
      return <FriendsList { ...otherProps } />
  }
};

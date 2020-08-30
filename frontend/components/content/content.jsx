import React from 'react';

import ChatWindow from '../chat_window';
import Dashboard from '../dashboard';

export default ({ selected }) => {
  switch (selected) {
    case "dashboard":
      return <Dashboard />;
    default:
      return <ChatWindow />;
  }
};

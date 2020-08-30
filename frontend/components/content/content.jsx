import React from 'react';

import ChatWindow from '../chat_window';
import Dashboard from '../dashboard';

export default ({ selected, ...otherProps }) => {
  switch (selected) {
    case "dashboard":
      return <Dashboard { ...otherProps } />;
    default:
      return <ChatWindow { ...otherProps } />;
  }
};

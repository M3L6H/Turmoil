import React from 'react';

import ChatWindow from '../chat_window';

export default ({ selected }) => {
  let Component;

  switch (selected) {
    default:
      Component = ChatWindow;
  }

  return <Component />;
};

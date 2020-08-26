import React from 'react';

import { Menu } from '../shoebuckle';

export default ({ comrades }) => {
  if (comrades.length === 0) {
    return (
      <Menu.Menu 
        noHover
        vertical
      >
        <Menu.Item>
          You currently have no friends. Use the + button to search for people you know!
        </Menu.Item>
      </Menu.Menu>
    );
  }

  return (
    <Menu.Menu>
      
    </Menu.Menu>
  );
};

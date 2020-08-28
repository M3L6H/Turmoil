import React from 'react';

import { Menu } from '../shoebuckle';

export default ({ comrades, inverted }) => {
  comrades = comrades.filter(({ pending, blocked }) => !(pending || blocked ));

  return (
    <Menu.Menu
      noHover
      vertical
      inverted={ inverted }
    >
      { comrades.length === 0 ? (
        <Menu.Item>
          You currently have no friends. Use the + button to search for people you know!
        </Menu.Item>
      ) : (
        <div></div>
      ) }
    </Menu.Menu>
  );
};

import React from 'react';

import { Icon, Menu } from '../shoebuckle';

export default () => {
  return (
    <Menu
      inverted
      className="friends-menu"
    >
      <Menu.Item>
        <Icon name="user-friends" />
      </Menu.Item>
      <Menu.Item>
        <Icon name="plus" />
      </Menu.Item>
    </Menu>
  );
};

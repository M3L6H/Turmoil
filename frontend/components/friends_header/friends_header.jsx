import React from 'react';

import { Menu } from '../shoebuckle';

const items = [
  "All",
  "Invites",
  "Blocked"
];

export default ({ tab, receiveDashboardSelection }) => {
  return (
    <Menu
      inverted
      className="friends-menu"
    >
      { items.map((item, i) => (
        <Menu.Item
          key={ i }
          active={ tab === item.toLowerCase() }
          onClick={ () => receiveDashboardSelection({ selected: "friends", tab: item.toLowerCase() }) }
        >
          { item }
        </Menu.Item>
      )) }
    </Menu>
  );
};

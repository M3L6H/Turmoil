import React, { useState } from 'react';

import { Menu } from '../shoebuckle';

const items = [
  "All",
  "Invites",
  "Blocked"
];

export default () => {
  const [selected, setSelected] = useState(items[0]);
  
  return (
    <Menu
      inverted
      className="friends-menu"
    >
      { items.map((item, i) => (
        <Menu.Item
          key={ i }
          active={ selected === item }
          onClick={ () => setSelected(item) }
        >
          { item }
        </Menu.Item>
      )) }
    </Menu>
  );
};

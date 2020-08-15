import React from 'react';

import { Header, Icon, Menu } from '../shoebuckle';

export default (props) => {
  return (
    <>
      <Menu.Item justifyStart>
        <Icon name="user-friends" className="friends-icon" /> Friends
      </Menu.Item>
      <Menu.Item>
        <Header as="h4">Direct Messages</Header>
        <Icon name="plus" />
      </Menu.Item>
    </>
  );
};

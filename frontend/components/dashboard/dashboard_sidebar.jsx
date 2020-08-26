import React from 'react';

import { Header, Icon, Menu } from '../shoebuckle';

import FriendsList from './friends_list_container';

export default ({ inverted }) => {
  
  return (
    <>
      <Menu.Item>
        <span>
          <Icon name="user-friends" className="friends-icon" /> Friends
        </span>
        <Icon name="plus" />

        <FriendsList inverted={ inverted } />
      </Menu.Item>
      <Menu.Item>
        <Header as="h4">Direct Messages</Header>
        <Icon name="plus" />
      </Menu.Item>
    </>
  );
};

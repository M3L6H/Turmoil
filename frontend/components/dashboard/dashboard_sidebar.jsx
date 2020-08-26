import React from 'react';

import { Header, Icon, Menu } from '../shoebuckle';

import FriendsList from './friends_list_container';

export default ({ inverted, noHover }) => {
  
  return (
    <>
      <Menu.Item noHover={ noHover }>
        <span>
          <Icon name="user-friends" className="friends-icon" />
          <Header as="h4" inline>Friends</Header>
        </span>
        <Icon name="plus" />

        <FriendsList inverted={ inverted } />
      </Menu.Item>
      <Menu.Item noHover={ noHover }>
        <span>
          <Icon name="comment" className="dms-icon" />
          <Header as="h4" inline>Direct Messages</Header>
        </span>
        <Icon name="plus" />
      </Menu.Item>
    </>
  );
};

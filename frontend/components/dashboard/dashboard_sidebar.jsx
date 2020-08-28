import React from 'react';

import { Header, Icon, Menu } from '../shoebuckle';

import FriendsList from './friends_list_container';
import FriendsModal from './friends_modal';

export default ({ 
  inverted,
  noHover,
  createComrade,
  receiveFriendsModal,
  friendsModal,
  fetchBeings,
  beings
}) => {
  
  return (
    <>
      <Menu.Item noHover={ noHover }>
        <span>
          <Icon name="user-friends" className="friends-icon" />
          <Header as="h4" inline>Friends</Header>
        </span>
        <Icon
          name="plus"
          onClick={ () => receiveFriendsModal(true) }
        />

        <FriendsList inverted={ inverted } />
      </Menu.Item>
      <Menu.Item noHover={ noHover }>
        <span>
          <Icon name="comment" className="dms-icon" />
          <Header as="h4" inline>Direct Messages</Header>
        </span>
        <Icon name="plus" />
      </Menu.Item>

      <FriendsModal
        { ...friendsModal }
        inverted={ inverted }
        createComrade={ createComrade }
        receiveFriendsModal={ receiveFriendsModal }
        fetchBeings={ fetchBeings }
        beings={ beings }
      />
    </>
  );
};

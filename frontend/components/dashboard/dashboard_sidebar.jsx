import React, { useState, useEffect } from 'react';

import { Button, Header, Icon, Menu } from '../shoebuckle';

import FriendsModal from './friends_modal';

export default ({ 
  inverted,
  noHover,
  currentBeingId,
  createComrade,
  receiveFriendsModal,
  friendsModal,
  fetchBeings,
  beings,
  comrades,
  comradeBeings,
  receiveHeader
}) => {
  const [selected, setSelected] = useState("friends");

  useEffect(() => {
    receiveHeader(selected);

    return () => receiveHeader("app");
  }, [selected]);
  
  return (
    <>
      <Menu.Item noHover={ noHover }>
        <Button
          fluid
          compact
          className={ `friends-button${ selected === "friends" ? " selected" : "" }` }
        >
          Comrades
        </Button>
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
        currentBeingId={ currentBeingId }
        createComrade={ createComrade }
        receiveFriendsModal={ receiveFriendsModal }
        fetchBeings={ fetchBeings }
        beings={ beings }
        comrades={ comrades }
        comradeBeings={ comradeBeings }
      />
    </>
  );
};

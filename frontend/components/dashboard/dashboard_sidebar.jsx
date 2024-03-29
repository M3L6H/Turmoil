import React, { useState, useEffect } from 'react';

import { Button, Header, Icon, Menu } from '../shoebuckle';

import ConversationList from './conversations_list_container';

export default ({ 
  noHover,
  receiveDashboardSelection,
  receiveHeader,
  dashboard,
  closeSidebar,
  signOut
}) => {
  useEffect(() => {
    receiveHeader(dashboard.selected);

    return () => receiveHeader("app");
  }, []);
  
  return (
    <>
      <Menu.Item noHover={ noHover }>
        <Button
          fluid
          compact
          className={ `friends-button${ dashboard.selected === "friends" ? " selected" : "" }` }
          onClick={ () => {
            closeSidebar();
            receiveDashboardSelection({ selected: "friends", tab: "all" });
            receiveHeader("friends");
          } }
        >
          Comrades
        </Button>
      </Menu.Item>
      <Menu.Item noHover={ noHover }>
        <Button
          fluid
          compact
          className={ `sign-out-button` }
          onClick={ () => {
            closeSidebar();
            signOut();
          } }
        >
          Sign Out
        </Button>
      </Menu.Item>
      <Menu.Item noHover={ noHover }>
        <span>
          <Icon name="comment" className="dms-icon" />
          <Header as="h4" inline>Direct Messages</Header>
        </span>
      </Menu.Item>
      <ConversationList />
    </>
  );
};

import React, { useState, useEffect } from 'react';

import { Button, Header, Icon, Menu } from '../shoebuckle';

export default ({ 
  noHover,
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
    </>
  );
};

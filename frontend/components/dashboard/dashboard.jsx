import React from 'react';

import FriendsList from './friends_list_container';

export default ({ dashboard, ...otherProps }) => {
  switch (dashboard.selected) {
    default:
      return <FriendsList { ...otherProps } />
  }
};

import React from 'react';

import AppHeader from '../app_header';
import FriendsHeader from '../friends_header';

export default ({ header }) => {
  switch (header) {
    case "friends":
      return <FriendsHeader />;
    default:
      return <AppHeader />;
  }
};

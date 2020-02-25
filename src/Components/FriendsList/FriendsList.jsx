import React from 'react';

import FriendsInfo from './FriendsInfo';

import friendsData from './Friends.json';

const FriendsList = () => (
  <ul>
    <FriendsInfo friends={friendsData} />
  </ul>
);

export default FriendsList;

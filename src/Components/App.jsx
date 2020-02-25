import React from 'react';

import SocialProfile from './SocialProfile/SocialProfile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
  <div>
    <SocialProfile />
    <Statistics />
    <FriendsList />
    <TransactionHistory />
  </div>
);

export default App;

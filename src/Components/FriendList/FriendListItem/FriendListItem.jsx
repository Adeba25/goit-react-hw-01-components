import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css';

const FriendListItem = ({
  avatar = '',
  name = 'FriendName',
  isOnline = null,
  id = null,
}) => (
  <>
    <li key={id} className={styles.item}>
      <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
      <img className="avatar" alt="User avatar" src={avatar} />
      <p className={styles.name}>{name}</p>
    </li>
  </>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

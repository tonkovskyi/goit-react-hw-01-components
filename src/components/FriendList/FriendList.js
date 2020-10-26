import React from 'react';
import PropTypes from 'prop-types';

import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline }) => (
        <li className={s.item}>
          <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
          <img className={s.avatar} src={avatar} alt={name} width="90" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
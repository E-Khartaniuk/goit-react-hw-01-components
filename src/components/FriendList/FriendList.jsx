import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(user => {
        return (
          <li className={css.item} key={user.id}>
            <span
              className={css.status}
              style={{ color: user.isOnline ? 'yellowgreen' : 'red' }}
            >
              {user.isOnline ? 'Online' : 'Offline'}
            </span>
            <img
              className={css.avatar}
              src={user.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{user.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

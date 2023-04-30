import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.friends__list}>
        {friends.map(({ id, avatar, isOnline, name }) => (
          <li className={css.friends__item} key={id}>
            <span className={`${css.friends__status} ${css[isOnline]}`}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.friends__name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired
};
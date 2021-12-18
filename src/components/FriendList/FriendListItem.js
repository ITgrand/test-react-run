import PropTypes from "prop-types";
import s from "./FriendList.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className={isOnline ? s.online : s.offline}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name} </p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;

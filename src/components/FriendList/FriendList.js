import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import s from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.friendlist}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;

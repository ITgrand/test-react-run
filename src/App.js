import ProfileList from "./components/Profile/ProfileList";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import data from "./components/Statistics/data.json";
import friends from "./components/FriendList/friends.json";

function App() {
  return (
    <div>
      <ProfileList />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;

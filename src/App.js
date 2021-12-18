import ProfileList from "./components/Profile/ProfileList";
import Statistics from "./components/Statistics/Statistics";

import data from "./components/Statistics/data.json";

function App() {
  return (
    <div>
      <ProfileList />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}

export default App;

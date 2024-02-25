import "./App.css";
import UsersData from "./Userscontroller";
import robots from "./Users.json";

function App() {
  return (
    <div>
      {robots.map((item) => {
        return (
          <UsersData
            id={item.id}
            name={item.name}
            userName={item.username}
            email={item.email}
          ></UsersData>
        );
      })}
    </div>
  );
}

export default App;

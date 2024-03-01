import "./App.css";
import UserFavoriteAnimals from "./UserFavoriteAnimals";

// function App() {
//   return (
//     <div>
//       <p>Hello World!</p>
//     </div>
//   );
// }

// export default App;

function App() {
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <div>
      <h3>User Name:{user.firstName}</h3>
      <h3>User lastName:{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </div>
  );
}
export default App;

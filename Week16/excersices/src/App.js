import "./App.css";
import user from "./User";

// function App() {
//   return (
//     <div>
//       <p>Hello World!</p>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <h3>User Name:{user.firstName}</h3>
      <h3>User lastName:{user.lastName}</h3>
    </div>
  );
}
export default App;

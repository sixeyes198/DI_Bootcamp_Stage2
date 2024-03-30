import "./App.css";
import CurrentWeather from "./components/Currentweather";
function App() {
  return (
    <>
      <h1>Weather app</h1>
      <input
        type="text"
        placeholder="Search..."
        style={{ backgroundColor: "white", color: "black" }}
      />
      <CurrentWeather />
    </>
  );
}

export default App;

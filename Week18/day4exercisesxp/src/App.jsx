import "./App.css";
import { ThemeProvider, useTheme } from "./Components/ThemeContext";
function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>Toggle dark/light</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <ThemeProvider>
        <div>
          <h1>Theme Switcher Example</h1>
          <ThemeSwitcher />
          Other components here
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

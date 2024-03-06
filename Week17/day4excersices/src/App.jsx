// import BuggyCounter from "./BuggyCounter";
// import ErrorBoundary from "./ErrorBoundary";
import Child from "./Components/Child";
import Color from "./Components/Color";

function App() {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>Simulation 1:</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h1 style={{ textAlign: "center" }}>Simulation 2:</h1>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h1 style={{ textAlign: "center" }}>Simulation 3:</h1>
      <BuggyCounter /> */}
      <Color />
    </>
  );
}

export default App;

// import ErrorBoundry from "./Component/ErrorBoundary";
// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./Component/Home";
// import Profile from "./Component/Profile";
// import Shop from "./Component/Shop";
// import ErrorBoundry from "./Component/ErrorBoundary";

// import Example1 from "./Component/Example1";
// import Example2 from "./Component/Example2";
// import Example3 from "./Component/Example3";
// import PostList from "./Component/PostList";

function App() {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://webhook.site/736d6221-5939-4817-b203-89eba421d21e",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            key1: "myusername",
            email: "mymail@gmail.com",
            name: "Isaac",
            lastname: "Doe",
            age: 27,
          }),
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Excercise 1
      <header>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/shop">Shop</Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/home"
          element={
            <ErrorBoundry>
              <Home />
            </ErrorBoundry>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundry>
              <Profile />
            </ErrorBoundry>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundry>
              <h3>404 Something went wrong</h3>
            </ErrorBoundry>
          }
        />
      </Routes> */}
      {/* <h1>Excercise 2:</h1>
      <PostList /> */}

      {/* <h2>Excercise 3:</h2>
      <Example1 />
      <Example2 />
      <Example3 /> */}

      <h2>Excersice 4:</h2>
      <button onClick={fetchData}>Log response</button>
    </>
  );
}

export default App;

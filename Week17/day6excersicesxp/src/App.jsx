// import ErrorBoundry from "./Component/ErrorBoundary";
// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./Component/Home";
// import Profile from "./Component/Profile";
// import Shop from "./Component/Shop";
// import ErrorBoundry from "./Component/ErrorBoundary";

import PostList from "./Component/PostList";
function App() {
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
      <h1>Excercise 2:</h1>
      <PostList />
    </>
  );
}

export default App;

import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Product from "./Components/Product";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Shop">Shop</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:a/:b" element={<Product />} />
        <Route path="*" element={<h3>404 Not found</h3>} />
      </Routes>
    </>
  );
}

export default App;

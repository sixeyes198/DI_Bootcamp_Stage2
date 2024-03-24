import "./App.css";
import Product from "./components/Product";
import Shop from "./components/Shop";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { useState } from "react";
import { createContext } from "react";

const products = [
  { id: 11, name: "Dell 15", price: 3000, description: "good laptop" },
  { id: 20, name: "Lenovo 18", price: 6000, description: "great laptop" },
  {
    id: 77,
    name: "Apple air 21",
    price: 12000,
    description: "excellent laptop",
  },
];

//usecontext//
export const AppContext = createContext();

function App() {
  const [mycart, setMyCart] = useState([]);

  return (
    <AppContext.Provider value={{ mycart, setMyCart }}>
      <Routes>
        <Route path="/" element={<Shop products={products} />} />
        <Route path="/product/:id" element={<Product products={products} />} />
        <Route path="*" element={<h2>404 Not found</h2>} />
        <Route path="/cart/:name/:price" element={<Cart />} />
        {/* <Route
          path="/cart/:name/:price"
          element={<Cart mycart={mycart} setMyCart={setMyCart} />}
        /> */}
      </Routes>
    </AppContext.Provider>
  );
}
export default App;

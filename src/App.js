import "./App.css";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/shopping-cart/" element={<Home />} />
          <Route path="/shopping-cart/shop" element={<Shop />} />
          <Route path="/shopping-cart/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

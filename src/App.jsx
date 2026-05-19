import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/admin" element={<Admin />} />

        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />
      </Routes>
    </>
  );
}

export default App;
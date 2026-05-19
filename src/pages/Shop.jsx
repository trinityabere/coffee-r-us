import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

function Shop() {
  const { products } = useProducts();
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="shop-container">

      {/* SIDEBAR */}
      <div className="sidebar">

        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-item">
          <input type="checkbox" />
          <label>Location 1</label>
        </div>

        <div className="filter-item">
          <input type="checkbox" />
          <label>Location 2</label>
        </div>

        <div className="filter-item">
          <input type="checkbox" />
          <label>Location 3</label>
        </div>

        <div className="filter-item">
          <input type="checkbox" />
          <label>Location 4</label>
        </div>

      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={{ color: "white" }}>No products found</p>
        )}

      </div>
    </div>
  );
}

export default Shop;
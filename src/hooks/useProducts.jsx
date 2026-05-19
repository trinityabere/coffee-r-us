import { useState, useEffect } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);

  const BASE_URL = "http://localhost:3000/products";

  // GET
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // POST
  const addProduct = async (product) => {
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const newProduct = await response.json();

      setProducts((prev) => [...prev, newProduct]);
    } catch (err) {
      console.error("Add product failed:", err);
    }
  };

  // DELETE
  const deleteProduct = async (id) => {
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });

      setProducts((prev) =>
        prev.filter((p) => p.id !== id)
      );
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  // (PATCH)
  const updateProduct = async (id, updatedData) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      const updatedProduct = await response.json();

      setProducts((prev) =>
        prev.map((p) =>
          p.id === id ? updatedProduct : p
        )
      );
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return {
    products,
    addProduct,
    deleteProduct,
    updateProduct,
  };
}

export default useProducts;
import { useState, useEffect } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const BASE_URL = "http://localhost:3001/products";

  // GET PRODUCTS
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [refresh]); 

  // CREATE
  const addProduct = async (product) => {
    await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    setRefresh((prev) => !prev); 
  };

  // DELETE
  const deleteProduct = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    setRefresh((prev) => !prev);
  };

  // UPDATE
  const updateProduct = async (id, data) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setRefresh((prev) => !prev);
  };

  return {
    products,
    addProduct,
    deleteProduct,
    updateProduct,
  };
}

export default useProducts;
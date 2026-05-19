import { useState } from "react";
import useProducts from "../hooks/useProducts";

function Admin() {
  const {
    products,
    addProduct,
    deleteProduct,
    updateProduct,
  } = useProducts();

  const [form, setForm] = useState({
    name: "",
    description: "",
    origin: "",
    price: "",
  });

  const [editing, setEditing] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing) {
      updateProduct(editing, form);
      setEditing(null);
    } else {
      addProduct(form);
    }

    setForm({
      name: "",
      description: "",
      origin: "",
      price: "",
    });
  };

  const handleEdit = (product) => {
    setEditing(product.id);

    setForm({
      name: product.name,
      description: product.description,
      origin: product.origin,
      price: product.price,
    });
  };

  return (
    <div className="admin">
      <div className="admin-container">

        <h2 className="admin-title">
          {editing ? "Edit Product" : "Add Product"}
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Product Name</label>

            <input
              type="text"
              placeholder="Enter product name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              placeholder="Enter description"
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Origin</label>

            <input
              type="text"
              placeholder="Enter origin"
              value={form.origin}
              onChange={(e) =>
                setForm({
                  ...form,
                  origin: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Price</label>

            <input
              type="number"
              placeholder="Enter price"
              value={form.price}
              onChange={(e) =>
                setForm({
                  ...form,
                  price: e.target.value,
                })
              }
            />
          </div>

          <button type="submit">
            {editing
              ? "Update Product"
              : "Add Product"}
          </button>
        </form>

        {/* PRODUCTS */}
        {products.map((product) => (
          <div
            key={product.id}
            className="admin-card"
          >
            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <p>{product.origin}</p>

            <p>${product.price}</p>

            <button
              onClick={() =>
                handleEdit(product)
              }
            >
              Edit
            </button>

            <button
              onClick={() =>
                deleteProduct(product.id)
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
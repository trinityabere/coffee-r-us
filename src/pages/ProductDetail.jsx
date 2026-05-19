import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product...</p>;

  if (!product) return <p>Product not found or failed to load</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.origin}</p>
      <p>Ksh {product.price}</p>
    </div>
  );
}

export default ProductDetail;
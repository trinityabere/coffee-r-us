import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">

      <h2>{product.name}</h2>

      <p>{product.origin}</p>

      <p>Ksh {product.price}</p>

      <Link to={`/product/${product.id}`}>
        View Product
      </Link>

    </div>
  );
}

export default ProductCard;
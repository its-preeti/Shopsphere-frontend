import "./ProductCard.css";

import { Link } from "react-router-dom";

function ProductCard({
  id,
  image,
  title,
  price,
}) {

  return (

    <div className="product-card">

      <img
        src={image}
        alt={title}
      />

      <div className="product-info">

        <h3>
          {title}
        </h3>

        <p>
          ₹{price}
        </p>

        <Link to={`/product/${id}`}>

          <button>
            View Product
          </button>

        </Link>

      </div>

    </div>
  );
}

export default ProductCard;
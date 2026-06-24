import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import Reviews from "../../components/Reviews/Reviews";

const products = [
  {
    id: 1,
    title: "Men's Shirt",
    price: 1999,
    image:
      "https://i.pinimg.com/736x/39/87/a8/3987a89c70de9b1736a5364162ca108f.jpg",
    description:
      "Stylish men's jacket perfect for winter and casual wear.",
  },
  {
    id: 2,
    title: "Women's Dress",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
    description:
      "Elegant women's dress suitable for parties and events.",
  },
  {
    id: 3,
    title: "Sports Shoes",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description:
      "Comfortable sports shoes for running and daily use.",
  },
  {
    id: 4,
    title: "Smart Watch",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description:
      "Advanced smartwatch with fitness and health tracking.",
  },
];

const ProductDetails = () => {
 
  const { addToCart } = useContext(CartContext);
const { addToWishlist } = useContext(WishlistContext);
  const { id } = useParams();

  

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }
 return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-content">
        <h1>{product.title}</h1>

        <h2>₹{product.price}</h2>

        <p>{product.description}</p>
          <button
  onClick={() => addToCart(product)}>
  Add To Cart
        </button>
        <button
  onClick={() => addToWishlist(product)}
>
   Add To Wishlist
</button>
<Reviews />
      </div>
    </div>
  );
};

export default ProductDetails;
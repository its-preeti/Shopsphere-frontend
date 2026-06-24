import "./Navbar.css";

import { Link } from "react-router-dom";

import { useContext } from "react";

import { CartContext }
from "../../context/CartContext";

import { WishlistContext }
from "../../context/WishlistContext";

import ThemeToggle
from "../ThemeToggle/ThemeToggle";

function Navbar() {

  const { cartItems } = useContext(CartContext);

  const { wishlistItems } = useContext(WishlistContext);

  return (

    <nav className="navbar">

      <div className="logo">
        <img src="https://cdn-icons-png.flaticon.com/128/3081/3081559.png" alt="logo" />
      
      
       <h1>Shopsphere</h1>

       <span className="dot"></span>
     </div>
       
      <ul className="nav-links">
      
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">
            Products
          </Link>
        </li>

        <li>
          <Link to="/cart">
            Cart ({cartItems.length})
          </Link>
        </li>

        <li>
          <Link to="/wishlist">
            Wishlist ({wishlistItems.length})
          </Link>
        </li>

        <li>
          <Link to="/auth">
             Account
        </Link>
       </li>

         <Link to="/analytics">
            Analytics
          </Link>
        <li>
          <Link to="/orders">
             Orders
          </Link>
      </li>

        <li>
          <ThemeToggle />
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;
import { Link } from "react-router-dom";

import {
  useContext,
} from "react";

import "./Cart.css";

import {
  CartContext,
} from "../../context/CartContext";

function Cart() {

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } =
    useContext(CartContext);

  // TOTAL PRICE

  const totalPrice =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );
    
  return (

    <div className="cart-page">

      <h3>
        🛒 Shopping Cart
      </h3>

      {cartItems.length === 0 ? (

        <h5>
          Your Cart Is Empty
        </h5>

      ) : (

        <>

          <div className="cart-container">

            {cartItems.map((item) => (

              <div
                className="cart-card"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <h3>
                  {item.title}
                </h3>

                <p>
                  ₹{item.price}
                </p>

                <div className="quantity">

                  <button
                    onClick={() =>
                      decreaseQuantity(
                        item.id
                      )
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(
                        item.id
                      )
                    }
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

          <h2 className="total">
            Total: ₹{totalPrice}
          </h2>

          <button
            className="clear-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <Link to="/payment">

          <button className="clear-btn">
                Proceed To Payment
           </button>

        </Link>
        </>

      )}

    </div>
  );
}

export default Cart;
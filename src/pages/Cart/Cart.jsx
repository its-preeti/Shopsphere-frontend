import "./Cart.css";

import { useContext } from "react";

import { CartContext }
from "../../context/CartContext";

import { useNavigate }
from "react-router-dom";

function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
  } = useContext(CartContext);

  const navigate =
  useNavigate();

  // TOTAL

  const total =
  cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (

    <div className="cart-page">

      <h1 className="cart-title">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (

        <h2 className="empty-cart">
          🛒 Your Cart Is Empty
        </h2>

      ) : (

        <div className="cart-container">

          {cartItems.map((item) => (

            <div
              className="cart-card"
              key={item.id}
            >

              <img
                className="cart-image"
                src={item.image}
                alt={item.title}
              />

              <div className="cart-details">

                <h2>
                  {item.title}
                </h2>

                <p className="cart-price">
                  ₹{item.price}
                </p>

                {/* QUANTITY */}

                <div className="quantity-controls">

                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                  >
                    -
                  </button>

                  <span className="quantity-number">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                  >
                    +
                  </button>

                </div>

                {/* REMOVE */}

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          {/* SUMMARY */}

          <div className="cart-summary">

            <h2>
              Total: ₹{total}
            </h2>

            <div className="summary-buttons">

              <button
                className="clear-btn"
                onClick={clearCart}
              >
                Clear Cart
              </button>

              <button
                className="checkout-btn"
                onClick={() =>
                  navigate("/payment")
                }
              >
                🚀 Proceed To Payment
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;
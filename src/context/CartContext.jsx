import {
  createContext,
  useState,
} from "react";

export const CartContext =
createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] =
  useState([]);

  // ADD TO CART

  const addToCart = (product) => {

    const exist =
    cartItems.find(
      (item) => item.id === product.id
    );

    if (exist) {

      setCartItems(

        cartItems.map((item) =>

          item.id === product.id

            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }

            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // REMOVE

  const removeFromCart = (id) => {

    setCartItems(

      cartItems.filter(
        (item) => item.id !== id
      )
    );
  };

  // INCREASE

  const increaseQty = (id) => {

    setCartItems(

      cartItems.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }

          : item
      )
    );
  };

  // DECREASE

  const decreaseQty = (id) => {

    setCartItems(

      cartItems.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }

          : item
      )
    );
  };

  // CLEAR CART

  const clearCart = () => {

    setCartItems([]);
  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
      }}
    >

      {children}

    </CartContext.Provider>
  );
}

export default CartProvider;
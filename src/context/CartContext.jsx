import {
  createContext,
  useState,
  useEffect,
} from "react";

export const CartContext =
  createContext();

function CartProvider({
  children,
}) {

  const [cartItems, setCartItems] =
    useState(() => {

      const savedCart =
        localStorage.getItem("cart");

      return savedCart
        ? JSON.parse(savedCart)
        : [];
    });

  // SAVE LOCALSTORAGE

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  // ADD TO CART

  const addToCart = (product) => {

    const existingItem =
      cartItems.find(
        (item) =>
          item.id === product.id
      );

    if (existingItem) {

      const updatedCart =
        cartItems.map((item) => {

          if (
            item.id === product.id
          ) {

            return {
              ...item,
              quantity:
                item.quantity + 1,
            };
          }

          return item;
        });

      setCartItems(updatedCart);

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

  // INCREASE

  const increaseQuantity =
    (id) => {

      const updatedCart =
        cartItems.map((item) => {

          if (item.id === id) {

            return {
              ...item,
              quantity:
                item.quantity + 1,
            };
          }

          return item;
        });

      setCartItems(updatedCart);
    };

  // DECREASE

  const decreaseQuantity =
    (id) => {

      const updatedCart =
        cartItems.map((item) => {

          if (
            item.id === id &&
            item.quantity > 1
          ) {

            return {
              ...item,
              quantity:
                item.quantity - 1,
            };
          }

          return item;
        });

      setCartItems(updatedCart);
    };

  // REMOVE

  const removeFromCart =
    (id) => {

      const updatedCart =
        cartItems.filter(
          (item) =>
            item.id !== id
        );

      setCartItems(updatedCart);
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
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >

      {children}

    </CartContext.Provider>
  );
}

export default CartProvider;
import {
  createContext,
  useState,
  useEffect,
} from "react";

export const WishlistContext =
  createContext();

function WishlistProvider({
  children,
}) {

  // LOAD FROM LOCALSTORAGE

  const [wishlistItems,
    setWishlistItems] =
    useState(() => {

      const savedWishlist =
        localStorage.getItem(
          "wishlist"
        );

      return savedWishlist
        ? JSON.parse(savedWishlist)
        : [];
    });

  // SAVE TO LOCALSTORAGE

  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(
        wishlistItems
      )
    );

  }, [wishlistItems]);

  // ADD TO WISHLIST

  const addToWishlist =
    (product) => {

      const existingItem =
        wishlistItems.find(
          (item) =>
            item.id === product.id
        );

      // DUPLICATE NAHI HOGA

      if (!existingItem) {

        setWishlistItems([
          ...wishlistItems,
          product,
        ]);
      }
    };

  // REMOVE FROM WISHLIST

  const removeFromWishlist =
    (id) => {

      const updatedWishlist =
        wishlistItems.filter(
          (item) =>
            item.id !== id
        );

      setWishlistItems(
        updatedWishlist
      );
    };

  return (

    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
      }}
    >

      {children}

    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
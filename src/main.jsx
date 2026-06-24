import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import {
  ThemeProvider,
} from "./context/ThemeContext";

import CartProvider
from "./context/CartContext";

import WishlistProvider
from "./context/WishlistContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <BrowserRouter>

    <ThemeProvider>

      <CartProvider>

        <WishlistProvider>

          <App />

        </WishlistProvider>

      </CartProvider>

    </ThemeProvider>

  </BrowserRouter>
);
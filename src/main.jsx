
import React from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter }
from "react-router-dom";

import App from "./App.jsx";

import "./index.css";

import {
ThemeProvider,
} from "./context/ThemeContext";

import CartProvider
from "./context/CartContext";

import WishlistProvider
from "./context/WishlistContext";

import AuthProvider
from "./context/AuthContext";

ReactDOM.createRoot(
document.getElementById("root")
).render(

<React.StrictMode>

<BrowserRouter>

<ThemeProvider>

<CartProvider>

<WishlistProvider>

<AuthProvider>

<App />

</AuthProvider>

</WishlistProvider>

</CartProvider>

</ThemeProvider>

</BrowserRouter>

</React.StrictMode>

);


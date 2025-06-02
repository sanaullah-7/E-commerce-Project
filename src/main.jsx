import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopContext from "./Pages/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShopContext>
);

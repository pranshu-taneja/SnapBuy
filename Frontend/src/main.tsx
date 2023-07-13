import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.tsx";
import Product from "./Pages/Product.tsx";
import Cart from "./Pages/Cart.tsx";
import User from "./Pages/User.tsx";
import Navbar from "./components/Navbar.tsx";
import MyProducts from "./Pages/MyProducts.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar></Navbar>
        
        <div className="WrapperBodyIndex">
          <Routes>
            <Route path="/" element={<App></App>}></Route>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/Product/:id" element={<Product></Product>}></Route>
            <Route path="/Cart" element={<Cart></Cart>}></Route>
            <Route path="/User" element={<User></User>}></Route>
            <Route path="/MyProducts" element={<MyProducts></MyProducts>}></Route>
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

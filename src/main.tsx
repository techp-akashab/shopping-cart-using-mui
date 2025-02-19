import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import Home from './components/Home/Home'
import Products from './components/Products/Products.tsx'
import Cart from './components/Cart/Cart'
import './components/i18n.ts';
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

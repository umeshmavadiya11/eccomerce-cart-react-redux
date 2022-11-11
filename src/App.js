import React, { useEffect } from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/home";
import Products from "./pages/products";
import DetailsPage from "./pages/details";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/cart/cart";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./redux/Actions/products";
export default function App(props) {
  const disptch= useDispatch();
 useEffect(() => {
   disptch(getAllProducts());
  }, [disptch])
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          
          <Route exact path="/products/:id" >
            <DetailsPage  />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

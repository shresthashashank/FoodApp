import React from "react";
import Navbarlogin from "./Navbarlogin";
import "../css/cart.css";

function Cart() {
  return (
    <div>
      <Navbarlogin greeting="Logout" />
      <div>
        <br />
        <br />
        <br />
        <h1>My Cart</h1>
      </div>
      <div className="cart-items">No items in Carts</div>
      <div>
        <h1>Order History</h1>
      </div>
      <div className="order-history">
        <p classNAme="order-header">Order HistoryRestaurant</p>
        <p classNAme="order-header">Order HistoryItems</p>
        <p classNAme="order-header">Order HistoryTotal</p>
        <p classNAme="order-header">Order HistoryCreated At</p>
      </div>
    </div>
  );
}

export default Cart;

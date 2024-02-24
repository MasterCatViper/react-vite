import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import "./Navbar.css"
import { useSelector } from 'react-redux';
const Navbar = () => {
  const cart = useSelector(state => state.cartReducer.cart)
  let count = 0;
  cart.forEach((item) => (count += item.quantity ))

  return (
    <nav>
        <h2 className="banner">My Meesho</h2>
        <div className="right-layout">
            <div className="cart-layout">
            <CiShoppingCart />
            <h3>{count}</h3>
            </div>
        </div>

    </nav>
  )
}

export default Navbar
import React from "react";
import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/slices/cartSlice";
const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart)
  const currentItem = cart.find(item => item.id == product.id);
  const currentQuantity = currentItem ? currentItem.quantity : 0;
  return (
    <div className="SingleProduct">
      <img className="productImg" src={product.images[0]} alt={product.title} />
      <div className="productinfo">
        <h2 className="productTitle">{product.title}</h2>
        <p className="productPrice">{product.price}</p>
      </div>
      <div className="cartInfo">
        <button className="button" onClick={() => dispatch(removeFromCart(product.id))}>-</button>
        <h4>{currentQuantity}</h4>
        <button className="button" onClick={() => dispatch(addToCart(product.id))}>+</button>
      </div>
    </div>
  );
};

export default SingleProduct;

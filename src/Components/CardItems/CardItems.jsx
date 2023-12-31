import React, { useContext } from "react";
import "./CardItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CardItems = () => {
  const {getTotalCartAmount,all_product, cartItems, remveFromCart} = useContext(ShopContext);
  return (
    <div className="carditems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e,index) => {
        if (cartItems[e.id] > 0) {
          return ( 
         <div>
              <div key={index} className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="Loading..." className="cartitems-product-icon"/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    remveFromCart(e.id);
                  }}
                  alt="Loading..."
                />
              </div>
              <hr />
            </div>
            )
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
       <button>PROCEED TO CHECKOUT</button>
        </div>
  <div className="cartitems-promocode">
    <p>If you have a promo code, Enter it here</p>
    <div className="carditems-promobox">
      <input type="text" placeholder="Promo Code" />
      <button>APPLY</button>
    </div>
  </div>
      </div>
    </div>
  );
};

export default CardItems;

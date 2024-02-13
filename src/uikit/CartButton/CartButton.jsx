import React from "react";
import style from "./cart.module.css";
import cart from "../../assets/icons/cart/cart.svg";

function CartButton() {
    return (
        <button className={style.cart}>
            <span id={style.count}>20</span>
            <img src={cart} alt='cart' />
            <span id={style.title}>Cart</span>
        </button>
    );
}

export default CartButton;

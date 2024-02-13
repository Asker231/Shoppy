import React from "react";
import style from "./faworites.module.css";
import Faworites from "../../assets/icons/like/like.svg";
function FaworitesButton() {
    return (
        <button className={style.faworites}>
            <img src={Faworites} alt='faworites' />
            <span id={style.title}>Faworites</span>
        </button>
    );
}

export default FaworitesButton;

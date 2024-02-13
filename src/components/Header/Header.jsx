import React from "react";
import style from "./header.module.css";
import InputSearch from "../../uikit/InputSearch/InputSearch";
import CartButton from "../../uikit/CartButton/CartButton";
import FaworitesButton from "../../uikit/FaworitesButton/FaworitesButton";

function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo}>Shoppy</div>
            <InputSearch />
            <div className={style.leftSection}>
                <CartButton />
                <FaworitesButton />
            </div>
        </div>
    );
}

export default Header;

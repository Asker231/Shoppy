import React from "react";
import style from "./header.module.css";
import InputSearch from "../../uikit/InputSearch/InputSearch";
import CartButton from "../../uikit/CartButton/CartButton";
import FaworitesButton from "../../uikit/FaworitesButton/FaworitesButton";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className={style.header}>
            <Link to="/" className={style.logo}>
                Shoppy</Link>
            <InputSearch />
            <div className={style.leftSection}>
                <CartButton />
                <FaworitesButton />
            </div>
        </div>
    );
}

export default Header;

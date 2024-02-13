import React from "react";
import style from "./inputsearch.module.css";
import searchIcon from "../../assets/icons/search/search.svg";

function InputSearch() {
    return (
        <div className={style.search}>
            <img src={searchIcon} alt='searchIcon' />
            <input placeholder="Search..." type='text' />
        </div>
    );
}

export default InputSearch;

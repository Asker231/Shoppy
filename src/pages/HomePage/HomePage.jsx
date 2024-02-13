import React from "react";
import Header from "../../components/Header/Header";
import style from "./home.module.css";
import Categories from "../../components/Categories/Categories";

function HomePage() {
    return (
        <div className={style.home}>
            <Header />
            <Categories/>
            <div className={style.section}>

            </div>
        </div>
    );
}

export default HomePage;

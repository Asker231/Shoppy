import React from "react";
import Header from "../../components/Header/Header";
import style from "./home.module.css";
import Categories from "../../components/Categories/Categories";
import { Route, Routes } from "react-router-dom";
import Women from '../Women/Women.jsx'
import Men from '../Men/Men.jsx'
import Kids from '../Kids/Kids.jsx'
import Sports from '../Sports/Sports.jsx'
import Brands from '../Brands/Brands.jsx'
import New from '../New/New.jsx'
import Sale from '../Sale/Sale.jsx'

function HomePage() {
    return (
        <div className={style.home}>
            <Header />
            <Categories />
            
            <div className={style.section}>
                <Routes>
                    <Route path="/women" element={<Women/>}/>
                    <Route path="/men" element={<Men/>}/>
                    <Route path="/kids" element={<Kids/>}/>
                    <Route path="/sports" element={<Sports/>}/>
                    <Route path="/brands" element={<Brands/>}/>
                    <Route path="/new" element={<New/>}/>
                    <Route path="/sale" element={<Sale/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default HomePage;

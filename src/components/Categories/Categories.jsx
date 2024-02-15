import React from "react";
import { categories } from "./categories.prop";
import style from "./categories.module.css";
import { Link } from "react-router-dom";


function Categories() {
    const [categorilist, setList] = React.useState([]);
    React.useEffect(() => {
        setList(categories);
    }, []);
    return (
        <div className={style.Categories}>
            {categories.map((el, ind) => {
                return <Link to={el.path}>{el.title}</Link>
            })}
        </div>
    );
}

export default Categories;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "../pages/HomePage/HomePage";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
<HomePage />
    
    </BrowserRouter>
);

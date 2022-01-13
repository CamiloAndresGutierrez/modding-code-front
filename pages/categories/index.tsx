import React from "react";
import Base from '../../components/Base';
import Navbar from "../../components/navbar";
import Categories from "../../containers/categories";

const CategoryPage = () => {
    return (
        <Base
            pageTitle={"Algorithm categories"}
        >
            <Navbar />
            <Categories />
        </Base>
    )
}

export default CategoryPage;

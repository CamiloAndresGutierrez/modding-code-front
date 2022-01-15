import React, { useEffect } from "react";
import Base from '../../components/Base';
import Navbar from "../../components/navbar";
import Categories from "../../containers/categories";

const CategoryPage = () => {

    useEffect(() => {
        fetch(`${process.env.APIURL}/minicourse/get`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            console.log(data);
        })
    }, []);

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

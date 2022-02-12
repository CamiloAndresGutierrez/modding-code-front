import React from "react";
import Base from 'components/Base';
import Navbar from "components/navbar";
import MinicoursesContainer from "containers/minicourses";

const MinicoursesPage = () => {
    return (
        <Base pageTitle={`Minicourses page`}>
            <Navbar></Navbar>
            <MinicoursesContainer />
        </Base>
    )
}

export default MinicoursesPage;

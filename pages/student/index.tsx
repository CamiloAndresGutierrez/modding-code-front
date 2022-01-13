import React from "react";
import Base from '../../components/Base';
import Navbar from "../../components/navbar";
import { UserType } from '../../lib/types';

const Student = () => {
    return (
        <Base
            pageTitle={"Welcome student"}
        >
            <Navbar />
        </Base>
    )
}

export default Student;

import React from "react";
import Base from '../../../components/Base';
import Navbar from "../../../components/navbar";
import MinicoursesContainer from "../../../containers/minicourses";
import { NextPage, NextPageContext } from 'next';

type Props = { name: string };

type Ctx = {
    query: Props;
};  

const MinicoursePage: NextPage<Props> = (props: Props) => {
    return (
        <Base>
            <Navbar></Navbar>
            <MinicoursesContainer {...props} />
        </Base>
    )
}

MinicoursePage.getInitialProps = (ctx: NextPageContext & Ctx) => {
    return Promise.resolve(ctx.query);
};

export default MinicoursePage;

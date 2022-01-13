import React from "react";
import Base from '../../../components/Base';
import Navbar from "../../../components/navbar";
import MinicoursesContainer from "../../../containers/minicourses";

const mockCategories = [
    {
        "name": "Greedy",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet est a felis eleifend, in tincidunt arcu pulvinar. Sed tristique dolor eget lorem vestibulum convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet est a felis eleifend, in tincidunt arcu pulvinar. Sed tristique dolor eget lorem vestibulum convallis.",
        "path": "greedy"
    },
    {
        "name": "Dynamic Programming",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet est a felis eleifend, in tincidunt arcu pulvinar. Sed tristique dolor eget lorem vestibulum convallis.",
        "path": "dynamic-programming"
    },
    {
        "name": "Graphs and Trees",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet est a felis eleifend, in tincidunt arcu pulvinar. Sed tristique dolor eget lorem vestibulum convallis.",
        "path": "graphs-and-trees"
    },
];

export const getStaticProps = async ({ params }) => {
    const category = mockCategories.find(category => category.path === params.minicourse);
    return {
        props: category
    };
}

export const getStaticPaths = async () => {
    const paths = mockCategories.map(category => ({
        params: { minicourse: category.path }
    }))

    return {
        paths,
        fallback: false,
    };
}

const MinicoursePage = (props) => {
    return (
        <Base>
            <Navbar></Navbar>
            <MinicoursesContainer {...props} />
        </Base>
    )
}

export default MinicoursePage;
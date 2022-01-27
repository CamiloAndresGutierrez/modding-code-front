import React, { useEffect, useState } from "react";
import Minicourse from "../../components/minicourse";
import { Jumbotron } from '../categories/categories.styled-components';
import { MinicoursesGrid } from "./minicourses.styled-components";

const MinicoursesContainer = (props) => {
    const { name } = props;
    const [minicourses, setMinicourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/minicourse/get')
            .then(response => response.json())
            .then(r => setMinicourses(r));
    }, []);

    return (
        <div>
            <Jumbotron>
                <div className={"content"}>
                    <div className={"text"}>
                        <h1>Minicourses</h1>
                        <p>
                            You’ll find minicourses to learn about {name}.
                            Each minicourse should encapsule a problem specific to this category
                        </p>
                    </div>
                    <div className={"filters"}>
                        <div className={"search-bar"}>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            {
                <MinicoursesGrid >
                    {minicourses.map(minicourse => (
                        <div key={minicourse.id}>
                            <Minicourse minicourse={minicourse} />
                        </div>
                    ))}
                </MinicoursesGrid>
            }

        </div>
    )
}

export default MinicoursesContainer;
import React, { useEffect, useState } from "react";
import Base from 'components/Base';
import Navbar from "components/navbar";
import MinicoursesContainer from "containers/minicourses";
import { fetchAllMinicourses } from 'lib/client/minicourses'

const MinicoursesPage = () => {
    const [minicourses, setMinicourses] = useState([]);

    useEffect(() => {
        fetchAllMinicourses()
          .then(response => response.json())
          .then(r => setMinicourses(r));
    }, []);

    return (
        <Base pageTitle={`Minicourses page`}>
            <Navbar></Navbar>
            <MinicoursesContainer minicourses={minicourses}/>
        </Base>
    );
};

// export const getStaticPaths = async () => {
//   const response = await fetchAllMinicourses(); // Change this line to fetch minicourses related to a category
//   const data = await response.json();
//
//   const paths = data.map(minicourse => ({
//     params: {
//       minicourse: minicourse.id.toString()
//     }
//   }))
//
//   return {
//     paths,
//     fallback: false
//   };
// };
//
//
// export const getStaticProps = async ({ params }) => {
//   const response = await fetchAllMinicourses(); // Change this line to fetch minicourses related to a category
//   const data = await response.json();
//
//   return {
//     props: {
//       minicourses: data
//     }
//   }
// }

export default MinicoursesPage;

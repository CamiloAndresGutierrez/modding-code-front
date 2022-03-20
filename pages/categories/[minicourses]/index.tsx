import React, { useState, useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';

import Base from 'components/Base';

import MinicoursesContainer from 'containers/minicourses';
import { GET_RANDOMIZE_MINICOURSES } from 'lib/client/minicourses';

import { useFetch } from 'utils/hooks/useFetch';

type Props = {
    categoryMinicourses: string
};

type Ctx = {
    query: Props;
};

const CategoryMinicourses: NextPage<Props> = (props) => {
    const { response } = useFetch(GET_RANDOMIZE_MINICOURSES(props.categoryMinicourses));
    const [minicourses, setMinicourses] = useState([]);
    useEffect(() => {
        if (response) {
            const { minicourses } = response;
            setMinicourses(minicourses);
        }
    }, [response]);

    return (
        <Base withNav>
            <MinicoursesContainer
                minicourses={minicourses}
            />
        </Base>
    );
}

CategoryMinicourses.getInitialProps = (ctx: NextPageContext & Ctx) => {
    return Promise.resolve(ctx.query);
};

export default CategoryMinicourses;
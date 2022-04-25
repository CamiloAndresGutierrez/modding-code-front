import React, { useState, useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';

import Base from 'components/Base';

import MinicoursesContainer from 'containers/minicourses';
import { GET_RANDOMIZE_MINICOURSES } from 'lib/client/minicourses';

import { useFetch } from 'utils/hooks/useFetch';
import { responseHasErrors } from 'lib/utils';
import { genericError } from 'lib/constants/errorMessages';
import makeRequest from 'lib/client';
import { url } from 'lib/constants';

type Props = {
    minicourses: string
};

type Ctx = {
    query: Props;
};

const CategoryMinicourses: NextPage<Props> = (props) => {
    const { accessToken } = useFetch({});
    const [minicourses, setMinicourses] = useState([]);
    const [fetchMinicourses, setFetchMinicourses] = useState(false);

    const getResponse = async () => {
        const { requestUrl, method, body } = GET_RANDOMIZE_MINICOURSES(props.minicourses);
        try {
            const response = await makeRequest(url(requestUrl), body, method, accessToken);
            if (responseHasErrors(response, genericError)) return [];

            const { minicourses } = response;
            setMinicourses(minicourses);
        }
        catch (e) {
            alert(genericError);
        }
    };

    useEffect(() => {
        if (accessToken) {
            getResponse();
        }
    }, [accessToken]);

    const shouldRefetch = () => {
        setFetchMinicourses(!fetchMinicourses);
    }

    return (
        <Base withNav>
            <MinicoursesContainer
                minicourses={minicourses}
                shouldRefetch={shouldRefetch}
            />
        </Base>
    );
}

CategoryMinicourses.getInitialProps = (ctx: NextPageContext & Ctx) => {
    return Promise.resolve(ctx.query);
};

export default CategoryMinicourses;
import React, { useEffect, useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Base from 'components/Base';

import MinicourseContainer from 'containers/minicourse';

import { useFetch } from 'utils/hooks/useFetch';

import { Minicourse as MinicourseType } from 'lib/types/minicourse';
import { GET_VIDEOS_BY_MINICOURSE_ID } from 'lib/client/videos';
import { GET_MINICOURSE_BY_ID } from 'lib/client/minicourses';
import { State } from 'lib/types/state';
import { setCurrentMinicourse, setMinicourseVideoSections } from 'lib/actions/minicourses';
import { SectionContent } from 'lib/types/videos';

type Props = {
    name: string
    minicourse: string
    minicourses: string
    setCurrentMinicourse: (value: any) => Dispatch
    currentMinicourse: MinicourseType
};

type Ctx = {
    query: Props;
};

const Minicourse: NextPage<Props> = (props: Props) => {
    const minicourseId = props.minicourse;
    const [minicourseVideos, setMinicourseVideos] = useState<MinicourseType>(null);
    const videosById = useFetch(GET_VIDEOS_BY_MINICOURSE_ID(minicourseId));
    const minicourseById = useFetch(GET_MINICOURSE_BY_ID(minicourseId));

    useEffect(() => {
        const { response } = videosById;
        if (response) {
            const { videos } = response;
            setMinicourseVideos(videos);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videosById]);

    useEffect(() => {
        const { response } = minicourseById;
        if (response) {
            const { minicourse } = response;
            props.setCurrentMinicourse(minicourse);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [minicourseById])

    return (
        <Base pageTitle={props.currentMinicourse && props.currentMinicourse.name} withNav>
            <MinicourseContainer minicourseVideos={minicourseVideos} />
        </Base>
    )
}

Minicourse.getInitialProps = (ctx: NextPageContext & Ctx) => {
    return Promise.resolve(ctx.query);
};

const mapStateToProps = (state: State) => {
    return {
        currentMinicourse: state.minicourses.currentMinicourse,
        sectionsContent: state.minicourses.sectionsContent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentMinicourse:
            (minicourse: MinicourseType) => dispatch(setCurrentMinicourse(minicourse)),
        setMinicourseVideoSections:
            (sectionContent: SectionContent[]) => dispatch(setMinicourseVideoSections(sectionContent))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Minicourse);

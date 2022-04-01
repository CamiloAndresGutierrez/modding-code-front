import React from 'react';
import videosMinicourse from '../public/mock/responses/videosMinicourse.json';
import { mount, shallow } from 'enzyme';
import MinicourseContainer from 'containers/minicourse';
import { Provider } from 'react-redux';
import { initStore } from 'lib/store/store';
import { Title } from 'containers/minicourse/minicourse.styled-components';
import { createSections } from 'lib/utils';
import { Container } from 'components/sectionsVideos/sectionVideos.styled-components';

const initialStore = {
    "minicourses": {
        "currentMinicourse": {
            "id": "cat-ebb324734f-1646442759-a52e057b-1646970021",
            "creation_date": 1646970021,
            "updated_date": 1647005928,
            "data_state": "ACTIVE",
            "username": "camilo.gutierrez@candidco.com",
            "visible": false,
            "category_id": "cat-ebb324734f-1646442759",
            "name": "Minicourse 2",
            "ext": "jpg",
            "rate": 5
        },
        "currentVideo": {
            "video": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            "name": "test2",
            "sectionName": "Context"
        }
    }
}

const store = initStore(initialStore);

const minicourseContainer = props =>
    mount(
        <Provider store={store}>
            <MinicourseContainer
                {...props}
            />
        </Provider>
    );

describe('Minicourse page', () => {
    it('Displays correct name of the first video', () => {
        const { videos } = videosMinicourse;
        const component = minicourseContainer({ minicourseVideos: videos })
            .find('MinicourseContainer')
            .find(Title);

        const sections = createSections(videos);
        const initialVideoName = sections[0].videos[0].name;
        expect(component.find(initialVideoName)).toBeTruthy();
    });

    it('Displays apology message', () => {
        const component = minicourseContainer({ minicourseVideos: [] })
            .find('MinicourseContainer')
            .find(Container);
            // .find('div');

        expect(component.text()).toEqual('Sorry, this minicourse has no videos yet.');
    });
})
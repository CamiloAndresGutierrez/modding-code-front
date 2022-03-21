
import { Server, Request } from 'miragejs';
import RESPONSES from '../public/mock';
import { Actions as minicourseActions } from 'lib/client/minicourses';
import { Actions as videosActions } from 'lib/client/videos';
import { Actions as problemsActions } from 'lib/client/problems';

import getMinicourses from 'public/mock/responses/getMinicourses.json';

import minicourse1 from 'public/mock/responses/minicourse1.json';
import minicourse2 from 'public/mock/responses/minicourse2.json';

import videosMinicourse1 from 'public/mock/responses/videosMinicourse1.json';
import videosMinicourse2 from 'public/mock/responses/videosMinicourse2.json';

import videoWithUrl1 from 'public/mock/responses/videoWithUrl1.json';
import videoWithUrl2 from 'public/mock/responses/videoWithUrl2.json';

import problem1 from 'public/mock/responses/problem1.json';
import problem2 from 'public/mock/responses/problem2.json';

import problems from 'public/mock/responses/problems.json';

const url = (path: string) => `${process.env.APIURL}${path}`;

const Actions = {
    ...minicourseActions,
    ...videosActions,
    ...problemsActions
}

const getResponseData = (parsedRequest) => {
    const action = parsedRequest.action;
    switch (action) {
        case Actions.GET_RANDOMIZE_MINICOURSES_ACTION:
            return getMinicourses;
        case Actions.GET_MINICOURSE_BY_ID_ACTION:
            if (parsedRequest.params.id ===
                'cat-ebb324734f-1646442759-46beec34-1646970768') {
                return minicourse1;
            }
            else if (parsedRequest.params.id ===
                'cat-ebb324734f-1646442759-a52e057b-1646970021') {
                return minicourse2;
            }
        case Actions.GET_VIDEOS_BY_MINICOURSE:
            if (parsedRequest.params.minicourse_id ===
                'cat-ebb324734f-1646442759-46beec34-1646970768') {
                return videosMinicourse1;
            }
            else if (parsedRequest.params.minicourse_id ===
                'cat-ebb324734f-1646442759-a52e057b-1646970021') {
                return videosMinicourse2;
            }
        case Actions.GET_VIDEO_BY_ID:
            if (parsedRequest.params.id ===
                'cat-ebb324734f-1646442759-a52e057b-1646970021-396c5d79-1647398884') {
                return videoWithUrl1
            }
            else if (parsedRequest.params.id ===
                'cat-ebb324734f-1646442759-a52e057b-1646970021-dfb3218d-1647398526') {
                return videoWithUrl2
            }
        case Actions.GET_PROBLEMS_BY_MINICOURSE_ACTION:
            return problems;
        case Actions.GET_PROBLEMS_BY_ID_ACTION:
            if (parsedRequest.params.id === 
                'cat-ebb324734f-1646442759-a52e057b-1646970021-0ad1272375-1647817201') {
                return problem1
            }
            else if (parsedRequest.params.id ===
                'cat-ebb324734f-1646442759-a52e057b-1646970021-38d8019f9c-1647817880') {
                return problem2
            }
    }
}

const responseData = (schema: any, request: Request, method: string) => {
    const data = new Map<string, any>();
    // Define routes results here!
    const parsedRequest = JSON.parse(request.requestBody);
    let responseData;
    if (request.url === url("/minicourse/get") ||
        request.url === url("/video/get") ||
        request.url === url("/problem/get")) {
        responseData = getResponseData(parsedRequest);
    }

    RESPONSES.forEach(response => {
        // data.set(url(response.path), response.data );
        data.set(url(response.path), response.data || responseData);
    });

    return data.get(request.url);
}

const runMockServer = () => {
    if (process.env.NODE_ENV == "development") {
        console.log("Be aware: Running mock mirage server!")
        const server = new Server({
            routes() {
                RESPONSES.forEach(response => {
                    switch (response.method) {
                        case 'GET':
                            this.get(url(response.path),
                                (schema, request) =>
                                    responseData(schema, request, response.method)
                            );
                            break;
                        case 'POST':
                            this.post(url(response.path),
                                (schema, request) =>
                                    responseData(schema, request, response.method)
                            );
                            break;
                        case 'PUT':
                            this.put(url(response.path),
                                (schema, request) =>
                                    responseData(schema, request, response.method)
                            );
                            break;
                        case 'DELETE':
                            this.delete(url(response.path),
                                (schema, request) =>
                                    responseData(schema, request, response.method)
                            );
                            break;
                    }
                })

                this.passthrough();
                this.passthrough("https://dev-38jrsauv.us.auth0.com/*");
            }
        })
        return server;
    }
}

export default runMockServer;
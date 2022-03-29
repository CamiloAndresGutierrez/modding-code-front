
import { Server, Request } from 'miragejs';
import RESPONSES from '../public/mock';
import { Actions as minicourseActions } from 'lib/client/minicourses';
import { Actions as videosActions } from 'lib/client/videos';
import { Actions as problemsActions } from 'lib/client/problems';

import getMinicourses from 'public/mock/responses/getMinicourses.json';
import minicourse from 'public/mock/responses/minicourse.json';
import videosMinicourse from 'public/mock/responses/videosMinicourse.json';
import videoWithUrl from 'public/mock/responses/videoWithUrl.json';
import problem from 'public/mock/responses/problem.json';
import problems from 'public/mock/responses/problems.json';
import expertMinicourses from 'public/mock/responses/expertMinicourses.json';
import updatedMinicourse1 from 'public/mock/responses/updatedMinicourse.json';
import createMinicourse from 'public/mock/responses/createMinicourse.json';

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
            return minicourse;
        case Actions.GET_VIDEOS_BY_MINICOURSE:
            return videosMinicourse;
        case Actions.GET_VIDEO_BY_ID:
            return videoWithUrl;
        case Actions.GET_PROBLEMS_BY_MINICOURSE_ACTION:
            return problems;
        case Actions.GET_PROBLEMS_BY_ID_ACTION:
            return problem;
        case Actions.GET_MINICOURSE_BY_USERNAME_ACTION:
            return expertMinicourses
    }
}

const updateData = (parsedRequest, requestUrl: string) => {
    switch (requestUrl) {
        case url('/minicourse'):
            return updatedMinicourse1;
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

    if (method === "PUT") {
        responseData = updateData(parsedRequest, request.url);
    }

    if (method === "POST" && request.url === url("/minicourse")) {
        responseData = createMinicourse
    }

    if (method === "DELETE" && request.url === url("/minicourse")) {
        responseData = "Success"
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

import { Server, Request } from 'miragejs';
import RESPONSES from '../public/mock';

const url = (path: string) => `${process.env.APIURL}${path}`;

const responseData = (schema: any, request: Request) => {
    const data = new Map<string, any>();

    // Define routes results here!
    RESPONSES.forEach(response => {
        data.set(url(response.path), response.data);
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
                            this.get(url(response.path), responseData);
                            break;
                        case 'POST':
                            this.post(url(response.path), responseData);
                            break;
                        case 'PUT':
                            this.put(url(response.path), responseData);
                            break;
                        case 'DELETE':
                            this.delete(url(response.path), responseData);
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
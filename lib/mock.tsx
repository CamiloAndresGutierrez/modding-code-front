
import { Server, Request } from 'miragejs';
import { CATEGORIES } from '../public/mock';

const url = (path: string) => `${process.env.APIURL}${path}`;

const response = (schema: any, request: Request) => {
    const data = new Map<string, any>();

    // Define routes results here!
    data.set(url('/categories/get'), CATEGORIES);

    return data.get(request.url);
}

const runMockServer = () => {
    if (process.env.NODE_ENV == "development") {
        console.log("Be aware: Running mock mirage server!")
        const server = new Server({
            routes() {
                this.get(url('/categories/get'), response);

                this.passthrough();
            }
        })
        return server;
    }
}

export default runMockServer;
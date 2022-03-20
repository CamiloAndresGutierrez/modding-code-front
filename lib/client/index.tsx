import { Method, RequestBodyType } from "lib/types";

const makeRequest = (url: string, requestBody: RequestBodyType, method: Method, jwtToken: string) => {
    return new Promise((resolve, reject) => {
        const request: RequestInit = {
            'method': method,
            'body': JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': jwtToken,
            }
        }

        fetch(url, request)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    })
};

export default makeRequest;
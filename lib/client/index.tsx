import { Method, RequestBodyType } from "lib/types";

const makeRequest = (url: string, requestBody: RequestBodyType, method: Method, jwtToken?: string) => {
    let requestHeaders = {};
    if (jwtToken) {
        requestHeaders = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtToken}`,
        }
    } else {
        requestHeaders = {
            'Content-Type': 'application/json'
        }
    }

    const request: RequestInit = {
        'method': method,
        'body': JSON.stringify(requestBody),
        headers: requestHeaders
    }

    return fetch(url, request)
        .then(res => res.json())
        .then(data => data);
}

export const makeFileUploadRequest = async (url: string, headers, file: File) => {
    const request: RequestInit = {
        'method': "PUT",
        'body': file,
        headers: {
            "Content-Type": "binary/octet-stream"
        }
    }

    return fetch(url, request)
        .then(res => res.json())
        .then(data => data)
        .catch(error => error);
};


export default makeRequest;

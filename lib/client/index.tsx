import { Method, RequestBodyType } from "lib/types";
import { convertFileToBinaryString } from "lib/utils";

const makeRequest = (url: string, requestBody: RequestBodyType, method: Method, jwtToken: string) => {
    const request: RequestInit = {
        'method': method,
        'body': JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': jwtToken,
        }
    }

    return fetch(url, request)
        .then(res => res.json())
        .then(data => data)
        .catch(error => error);
}

export const makeFileUploadRequest = async (url: string, headers, file: File) => {
    const binaryString = await convertFileToBinaryString(file);
    const request: RequestInit = {
        'method': "PUT",
        'body': binaryString,
        headers
    }

    return fetch(url, request)
        .then(res => res.json())
        .then(data => data)
        .catch(error => error);
};


export default makeRequest;

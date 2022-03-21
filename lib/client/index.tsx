import { Method, RequestBodyType } from "lib/types";
import { convertFileToBinaryString } from "lib/utils";

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

export const makeFileUploadRequest = (url: string, headers, file: File) => {
    return new Promise(async (resolve, reject) => {
        try {
            const binaryString = await convertFileToBinaryString(file);
            const request: RequestInit = {
                'method': "PUT",
                'body': binaryString,
                headers
            }

            fetch(url, request)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        } catch (e) {
            console.log(`%c <-- e: -->`, 'background-color: black; color: white; font-weight: bold', e);
        }
    })
};


export default makeRequest;

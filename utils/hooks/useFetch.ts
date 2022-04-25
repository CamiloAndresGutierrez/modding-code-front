import { useEffect, useState } from "react";
import { IdToken, useAuth0 } from "@auth0/auth0-react";
import jwtDecode from "jwt-decode";
import makeRequest from "lib/client";
import { url } from 'lib/constants';
import { Method, RequestBodyType } from "lib/types";
import { responseHasErrors } from "lib/utils";

type useFetchType = {
    requestUrl?: string,
    method?: Method,
    body?: RequestBodyType
}

export const useFetch = ({ requestUrl, method, body }: useFetchType) => {
    const [userRole, setUserRole] = useState<string>("");
    const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();
    const [response, setResponse] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [hasErrors, setHasErrors] = useState(null);

    const fetchData = async () => {
        if (isAuthenticated) {
            try {
                const shouldMakeRequest = !!requestUrl && !!method && !!body;
                if (shouldMakeRequest) {
                    const serverResponse = await makeRequest(url(requestUrl), body, method, accessToken);
                    if (responseHasErrors(serverResponse)) {
                        return
                    };
                    setResponse(serverResponse);
                };
                setHasErrors(false);
            }
            catch (e) {
                setHasErrors(true);
            }
        }
    }

    const setValues = async () => {
        const accessToken = await getAccessTokenSilently();
        setAccessToken(accessToken);
        const decodedToken: IdToken = jwtDecode(accessToken);
        setUserRole(decodedToken["http://localhost:3000/roles"][0]);
    }

    useEffect(() => {
        if (isAuthenticated) {
            setValues();
        }
        if (accessToken) {
            fetchData();
        }
    }, [isAuthenticated, accessToken]);

    return {
        isAuthenticated,
        userRole,
        isLoading,
        response,
        accessToken,
        hasErrors
    }
}
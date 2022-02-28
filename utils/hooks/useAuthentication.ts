import { useEffect, useState } from "react";
import { IdToken, useAuth0 } from "@auth0/auth0-react";
import jwtDecode from "jwt-decode";

export const useAuthentication = () => {
    const [jwtToken, setToken] = useState<IdToken>(null);
    const [userRole, setUserRole] = useState<string>("");
    const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            getAccessTokenSilently()
                .then(token => {
                    const decodedToken: IdToken = jwtDecode(token);
                    setToken(decodedToken);
                    setUserRole(decodedToken.permissions[0]);
                });
        }
    }, [isAuthenticated]);

    return {
        isAuthenticated,
        jwtToken,
        userRole,
        isLoading
    }
}
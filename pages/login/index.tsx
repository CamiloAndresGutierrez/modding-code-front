import React, { useEffect } from 'react';
import Base from 'components/Base';
import LoginContainer from 'containers/login';
import { NextPage } from 'next';
import { useAuth0 } from '@auth0/auth0-react';

const Login: NextPage = () => {
    const { loginWithRedirect } = useAuth0();

    useEffect(() => {
        loginWithRedirect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Base pageTitle={"Login"}>
            <LoginContainer />
        </Base>
    )
}

export default Login;

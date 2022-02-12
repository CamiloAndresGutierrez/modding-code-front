import React from 'react';
import Base from 'components/Base';
import Navbar from 'components/navbar';
import LoginContainer from 'containers/login';

const Login = () => {
    return (
        <Base pageTitle={"Login"}>
            <Navbar height={'50px'}/>
            <LoginContainer />
        </Base>
    )
}

export default Login;

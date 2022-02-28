import React from 'react';
import SingUpContainer from 'containers/signup';
import Base from 'components/Base';
import { NextPage } from 'next';

const Signup: NextPage = () => {
    return (
        <Base pageTitle='Sign up'>
            <SingUpContainer />
        </Base>
    );
}

export default Signup;

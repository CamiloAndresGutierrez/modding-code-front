import React from 'react';
import SingUpContainer from '../../containers/signup';
import Base from '../../components/Base';
import Navbar from '../../components/navbar';

const Signup = () => {
    return (
        <Base pageTitle='Sign up'>
            <Navbar height={'50px'}/>
            <SingUpContainer />
        </Base>
    );
}

export default Signup;

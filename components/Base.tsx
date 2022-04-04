import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import Navbar from './navbar';
import { useFetch } from 'utils/hooks/useFetch';
import { useRouter } from 'next/router';
import { studentAccesses, expertAccesses, studentFallback, expertFallback } from 'lib/types/userAcceses';
import { USERS } from 'lib/constants';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

type BaseProps = {
    pageTitle?: string;
    backgroundColor?: string;
    children: React.ReactNode;
    withNav?: Boolean;
    navHeight?: string;
};

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow-y: hidden;
`;


const GlobalStyle = createGlobalStyle<{ backgroundColor }>`
  body {
    background-color: ${props => props.backgroundColor};
  }
`

const Base = ({ pageTitle, children, backgroundColor, withNav = false, navHeight = null }: BaseProps) => {
    const { isAuthenticated, userRole, isLoading } = useFetch({});

    const { pathname, push } = useRouter();
    const title = pageTitle ? `Modding Code | ${pageTitle}` : `Modding Code`;
    const pageColor = !backgroundColor ? `white` : backgroundColor;

    const goToFallback = (accessType: string[], fallback: string) => {
        const hasAccess = accessType.includes(pathname);
        if (!hasAccess) {
            push(fallback);
        }
    }

    const handlePages = () => {
        if (!isLoading) {
            if (isAuthenticated) {
                if (userRole === USERS.STUDENT) {
                    goToFallback(studentAccesses, studentFallback);
                } else if (userRole === USERS.EXPERT) {
                    goToFallback(expertAccesses, expertFallback);
                }
            }
            else {
                push("/signup");
            }
        }
    }

    useEffect(() => {
        handlePages();
    }, [pathname, isAuthenticated, isLoading, userRole]);

    return (
        <>
            <GlobalStyle backgroundColor={pageColor}></GlobalStyle>
            <div>
                <Head >
                    <title>{title}</title>
                </Head>
                {
                    withNav &&
                    <Navbar userType={userRole} height={navHeight}></Navbar>
                }
                {
                    (isLoading) ?
                        <Container>
                            <CircularProgress />
                        </Container> :
                        children
                }
            </div>
        </>

    )
}

export default Base;
import React from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';

type BaseProps = {
    pageTitle?: string;
    backgroundColor?: string;
    children: React.ReactNode;
}


const GlobalStyle = createGlobalStyle<{ backgroundColor }>`
  body {
    background-color: ${props => props.backgroundColor};
  }
`

const Base = (props: BaseProps) => {
    const { pageTitle, children, backgroundColor } = props;
    const title = pageTitle ? `Modding Code | ${pageTitle}` : `Modding Code`;
    const pageColor = !backgroundColor ? `white` : backgroundColor;

    return (
        <>
            <GlobalStyle backgroundColor={pageColor}></GlobalStyle>
            <div>

                <Head >
                    <title>{title}</title>
                </Head>
                {children}
            </div>
        </>

    )
}

export default Base;
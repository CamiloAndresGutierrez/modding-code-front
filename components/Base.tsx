import React from 'react';
import Head from 'next/head';

type BaseProps = {
    pageTitle?: string;
    children: React.ReactNode;
}

const Base = (props: BaseProps) => {
    const { pageTitle, children } = props;
    const title = pageTitle ? `Modding Code | ${pageTitle}` : `Modding Code`;

    return (
        <>
            <Head >
                <title>{title}</title>
            </Head>
            {children}
        </>
    )
}

export default Base;
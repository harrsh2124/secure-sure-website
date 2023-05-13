import Head from 'next/head';
import React, { Fragment } from 'react';

const PageNotFound = () => {
    return (
        <Fragment>
            <Head>
                <title>Page not found</title>
            </Head>

            <div>404!</div>
        </Fragment>
    );
};

export default PageNotFound;

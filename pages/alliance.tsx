import Hero from '@/components/Alliance/Hero';
import List from '@/components/Alliance/List';
import Head from 'next/head';
import { Fragment } from 'react';

const Alliance = () => {
    return (
        <Fragment>
            <Head>
                <title>Alliance</title>
            </Head>

            <div>
                <Hero />
                <List />
            </div>
        </Fragment>
    );
};

export default Alliance;

import Hero from '@/components/Alliance/Hero';
import List from '@/components/Alliance/List';
import Head from 'next/head';
import { Fragment } from 'react';

const Services = () => {
    return (
        <Fragment>
            <Head>
                <title>Services</title>
            </Head>

            <div>
                <Hero />
                <List />
            </div>
        </Fragment>
    );
};

export default Services;

import Head from 'next/head';
import { Fragment } from 'react';
import Hero from '@/components/Forms/Hero';
import List from '@/components/Forms/List';

const Forms = () => {
    return (
        <Fragment>
            <Head>
                <title>Forms</title>
            </Head>

            <div>
                <Hero />
                <List />
            </div>
        </Fragment>
    );
};

export default Forms;

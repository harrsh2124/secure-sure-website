import Head from 'next/head';
import { Fragment } from 'react';
import Hero from '@/components/Brochure/Hero';
import List from '@/components/Brochure/List';

const Brochures = () => {
    return (
        <Fragment>
            <Head>
                <title>Brochures</title>
            </Head>

            <div>
                <Hero />
                <List />
            </div>
        </Fragment>
    );
};

export default Brochures;

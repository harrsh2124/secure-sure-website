import Associated from '@/components/Home/Associated';
import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import Head from 'next/head';
import { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Home</title>
            </Head>

            <div>
                <Hero />
                <Associated />
                <Services />
            </div>
        </Fragment>
    );
};

export default Home;

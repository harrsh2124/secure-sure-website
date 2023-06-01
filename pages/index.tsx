import Associated from '@/components/Home/Associated';
import Hero from '@/components/Home/Hero';
import Head from 'next/head';
import { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Home</title>
            </Head>

            <div className="px-[50px] xl:px-[150px]">
                <Hero />
                <Associated />
            </div>
        </Fragment>
    );
};

export default Home;

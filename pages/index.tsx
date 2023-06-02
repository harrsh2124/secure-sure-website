import Advantages from '@/components/Home/Advantages';
import Associated from '@/components/Home/Associated';
import Hero from '@/components/Home/Hero';
import Process from '@/components/Home/Process';
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
                <Advantages />
                <Process />
            </div>
        </Fragment>
    );
};

export default Home;

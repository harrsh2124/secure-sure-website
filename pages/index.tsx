import Advantages from '@/components/Home/Advantages';
import Associated from '@/components/Home/Associated';
import FAQ from '@/components/Home/FAQ';
import Hero from '@/components/Home/Hero';
import Process from '@/components/Home/Process';
import Testimonials from '@/components/Home/Testimonials';
import Head from 'next/head';
import { Fragment } from 'react';
import Services from '@/components/common/Services';

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>
                    Home | Secure Sure Insurance Agency - Your Trusted Insurance
                    Partner
                </title>
            </Head>

            <div>
                <Hero />
                <Associated />
                <Services />
                <Advantages />
                <Process />
                <Testimonials />
                <FAQ />
            </div>
        </Fragment>
    );
};

export default Home;

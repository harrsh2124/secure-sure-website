import Advantages from '@/components/Home/Advantages';
import Associated from '@/components/Home/Associated';
import FAQ from '@/components/Home/FAQ';
import Hero from '@/components/Home/Hero';
import Process from '@/components/Home/Process';
import Services from '@/components/Home/Services';
import Testimonials from '@/components/Home/Testimonials';
import Head from 'next/head';
import { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>
                    Secure Sure Insurance Agency - Best Insurance Agency India
                    Protecting What Matters Most to You
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

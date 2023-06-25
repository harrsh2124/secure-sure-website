import ContactUs from '@/components/AboutUs/ContactUs';
import Hero from '@/components/AboutUs/Hero';
import Services from '@/components/AboutUs/Services';
import Head from 'next/head';
import { Fragment } from 'react';

const AboutUs = () => {
    return (
        <Fragment>
            <Head>
                <title>About Us</title>
            </Head>

            <div>
                <Hero />
                <Services />
                <ContactUs />
            </div>
        </Fragment>
    );
};

export default AboutUs;

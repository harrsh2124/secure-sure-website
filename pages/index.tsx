import Head from 'next/head';
import React, { Fragment } from 'react';
import GroupPhoto from '../public/siteImages/GroupPhoto.svg';
import Image from 'next/image';

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Secure Sure</title>
                <link rel="canonical" href="https://securesure.in" />
            </Head>

            <div className="flex w-full items-center justify-evenly md:justify-center flex-col md:flex-row">
                <div className="flex flex-col items-center justify-center gap-6 w-full ">
                    <p className="text-5xl sm:text-6xl font-light uppercase text-center">
                        Coming soon
                    </p>

                    <p className="text-lg sm:text-xl font-extralight font-sans tracking-widest text-center w-2/3">
                        We will be celebrating the launch of our new site very
                        soon!
                    </p>
                </div>

                <div className="relative w-full h-96">
                    <Image
                        fill
                        priority
                        src={GroupPhoto}
                        alt="Group Photo"
                        quality={100}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Home;

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import PageNotFoundPng from '../public/siteImages/PageNotFound.svg';

const PageNotFound = () => {
    return (
        <Fragment>
            <Head>
                <title>Page not found</title>
                <link rel="canonical" href="https://securesure.in/404" />
            </Head>

            <div className="flex items-center justify-evenly md:justify-center flex-col-reverse md:flex-row w-full">
                <div className="relative w-full md:w-1/2 h-96">
                    <Image
                        src={PageNotFoundPng}
                        alt="404, page not found!!"
                        quality={100}
                        fill
                        priority
                    />
                </div>

                <div className="flex flex-col w-full md:w-1/2">
                    <div>
                        <p className="text-5xl">Oops!!</p>

                        <p className="text-2xl mt-4 mb-7">
                            We could not found the page you were looking for...
                        </p>
                    </div>

                    <div>
                        <Link
                            href="/"
                            className="bg-gray-700 text-white px-10 py-3 rounded"
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PageNotFound;

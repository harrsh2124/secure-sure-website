import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import PageNotFoundPng from '../public/PageNotFound.png';

const PageNotFound = () => {
    return (
        <Fragment>
            <Head>
                <title>Page not found</title>
            </Head>

            <div className="flex items-center justify-evenly md:justify-center flex-col-reverse md:flex-row w-full">
                <Image
                    src={PageNotFoundPng}
                    alt="404, page not found!!"
                    width={800}
                />

                <div className="flex flex-col">
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

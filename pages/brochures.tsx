import Head from 'next/head';
import { Fragment } from 'react';
import Hero from '@/components/Brochure/Hero';
import DocumentsList from '@/components/common/DocumentsList';
import BrochuresList from '@/components/Brochure/BrochuresList';

const Brochures = () => {
    return (
        <Fragment>
            <Head>
                <title>Brochures</title>
            </Head>

            <div>
                <Hero />
                <DocumentsList ListData={BrochuresList} />
            </div>
        </Fragment>
    );
};

export default Brochures;

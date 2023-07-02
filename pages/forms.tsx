import Head from 'next/head';
import { Fragment } from 'react';
import Hero from '@/components/Forms/Hero';
import DocumentsList from '@/components/common/DocumentsList';
import FormsList from '@/components/Forms/FormsList';

const Forms = () => {
    return (
        <Fragment>
            <Head>
                <title>Forms</title>
            </Head>

            <div>
                <Hero />
                <DocumentsList ListData={FormsList} />
            </div>
        </Fragment>
    );
};

export default Forms;

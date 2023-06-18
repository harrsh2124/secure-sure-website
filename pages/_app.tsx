import type { AppProps } from 'next/app';
import { Space_Grotesk } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhatsApp from '@/components/WhatsApp';
import ModelProvider, {
    InitialValuesType,
    ModelContext
} from '@/context/modal.context';
import '@/styles/globals.css';
import { useContext } from 'react';
import Layout from '@/components/HOC/Layout';

const font = Space_Grotesk({
    preload: true,
    subsets: ['latin', 'latin-ext'],
    weight: ['300', '400', '500', '600', '700']
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ModelProvider>
            <main className={`${font.className}`}>
                <Layout>
                    <Navbar />
                    <WhatsApp />
                    <Component {...pageProps} />
                    <Footer />
                </Layout>
            </main>
        </ModelProvider>
    );
}

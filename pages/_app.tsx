import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import AppWrapper from '@/HOC/AppWrapper';

const poppins = Poppins({
    subsets: ['latin-ext'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    preload: true
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main
            className={`h-screen w-screen flex flex-col ${poppins.className}`}
        >
            <Navbar />

            <div className="py-10" />

            <AppWrapper>
                <Component {...pageProps} />
            </AppWrapper>

            <Footer />
        </main>
    );
}

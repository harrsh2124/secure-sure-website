import type { AppProps } from 'next/app';
import { Space_Grotesk } from 'next/font/google';

import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import WhatsApp from '@/components/WhatsApp';

const font = Space_Grotesk({
    preload: true,
    subsets: ['latin', 'latin-ext'],
    weight: ['300', '400', '500', '600', '700']
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${font.className}`}>
            <Navbar />
            <WhatsApp />
            <Component {...pageProps} />
        </main>
    );
}

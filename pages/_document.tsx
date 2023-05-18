import { GA_TRACKING_ID } from '@/lib/gtag';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                                page_path: window.location.pathname,
                            });
                        `
                    }}
                />

                <meta
                    name="ahrefs-site-verification"
                    content="f4cf027644808afb9fee1d65962a88bb7ed4355e72bb4e1e6b5f5f638c242c66"
                />

                {/* SEO */}

                {/* Primary Meta Tags */}
                <meta name="title" content="Secure Sure" />
                <meta
                    name="description"
                    content="Your trusted partner for personalized insurance solutions, safeguarding what matters most to you."
                />
                <meta
                    name="keywords"
                    content="insurance, policy, leading, innovative, Insurance agency, Insurance services, Personalized insurance solutions, Insurance advice, Insurance consultation"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
                <meta name="language" content="English" />
                <meta name="author" content="Harrsh Patel" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://securesure.in" />
                <meta property="og:title" content="Secure Sure" />
                <meta
                    property="og:description"
                    content="Your trusted partner for personalized insurance solutions, safeguarding what matters most to you."
                />
                <meta
                    property="og:image"
                    content="https://securesure.in/_next/static/media/logo.8a5f523c.svg"
                />

                {/* Twitter */}
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:url" content="https://securesure.in" />
                <meta property="twitter:title" content="Secure Sure" />
                <meta
                    property="twitter:description"
                    content="Your trusted partner for personalized insurance solutions, safeguarding what matters most to you."
                />
                <meta
                    property="twitter:image"
                    content="https://securesure.in/_next/static/media/logo.8a5f523c.svg"
                />

                {/* SEO */}
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

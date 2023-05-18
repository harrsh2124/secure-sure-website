import env from '@/utils/env';
import React from 'react';
import Map from './Map';
import footerCSS from './footer.module.css';

const Footer = () => {
    const address =
        'Shubham Complex, Opposite Navrangpura Jain Temple, Navrangpura, Ahmedabad, Gujarat - 380009';

    return (
        <footer className="px-8 py-12">
            <div className="flex gap-8 min-h-[20rem] flex-col lg:flex-row">
                <div className="flex-1 flex flex-col gap-8 lg:my-auto">
                    <div
                        className={`flex items-center gap-2 ${footerCSS.link}`}
                    >
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                            </svg>
                        </div>

                        <a
                            href="https://goo.gl/maps/CwZnS48uhhVsdHsH8"
                            className="flex flex-wrap lg:block gap-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p>301, 302 & 303, Shubham Complex,</p>

                            <p>Opposite Navrangpura Jain Temple,</p>

                            <p>Navrangpura, Ahmedabad,</p>

                            <p>Gujarat - 380009</p>
                        </a>
                    </div>

                    <div
                        className={`flex items-center gap-2 ${footerCSS.link}`}
                    >
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                        </div>

                        <a
                            href={`mailto:${env.contactDetails.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: env.contactDetails.htmlEmail
                                }}
                            />
                        </a>
                    </div>

                    <div
                        className={`flex items-center gap-2 ${footerCSS.link}`}
                    >
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>
                        </div>

                        <a
                            href={`tel:${env.contactDetails.contactNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {env.contactDetails.htmlContactNumber}
                        </a>
                    </div>
                </div>

                <div className="w-full lg:w-7/12 h-[20rem]">
                    <Map address={address} />
                </div>
            </div>

            <div className="flex gap-1 items-center justify-center mt-10">
                <p>Made at</p>

                <p className="text-[#369df5] font-light">26pa fspl</p>

                <p>by</p>

                <a
                    href="https://www.harrsh.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#369df5] font-light"
                >
                    Harrsh Patel
                </a>
            </div>
        </footer>
    );
};

export default Footer;

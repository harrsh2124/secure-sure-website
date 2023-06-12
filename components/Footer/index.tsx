import Link from 'next/link';
import React from 'react';
import FaceBook from '../../public/assets/Footer/facebook.svg';
import Instagram from '../../public/assets/Footer/instagram.svg';
import Twitter from '../../public/assets/Footer/twitter.svg';
import Google from '../../public/assets/Footer/google.svg';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="px-[50px] xl:px-[150px] py-[60px] grid grid-cols-4">
            <div className="flex flex-col">
                <p>Secure Sure</p>

                <div className="flex gap-4">
                    {SocialMediaList.map((icon, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-[#546FFF] rounded-full p-2 flex cursor-pointer"
                            >
                                <div className="relative w-5 h-5 m-auto">
                                    <Image
                                        src={icon}
                                        alt="Social media icon"
                                        fill
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col">
                <p>Features</p>

                {FeaturesList.map((feature, index) => {
                    return <p key={index}>{feature}</p>;
                })}
            </div>

            <div className="flex flex-col">
                <p>Navigation</p>

                {NavigationList.map((navigation) => {
                    return (
                        <Link href={navigation.url} key={navigation.id}>
                            {navigation.title}
                        </Link>
                    );
                })}
            </div>

            <div className="flex flex-col">
                <p>Contact details</p>

                <p>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</p>

                <p>{process.env.NEXT_PUBLIC_HTML_CONTACT_NUMBER}</p>
            </div>
        </div>
    );
};

export default Footer;

const FeaturesList = [
    'Health insurance',
    'Health insurance',
    'Health insurance',
    'Health insurance',
    'Health insurance'
];

const NavigationList = [
    {
        id: 'home',
        title: 'Home',
        url: '/'
    },
    {
        id: 'services',
        title: 'Services',
        url: '/services'
    },
    {
        id: 'brochures',
        title: 'Brochures',
        url: '/brochures'
    },
    {
        id: 'forms',
        title: 'Forms',
        url: '/forms'
    },
    {
        id: 'about-us',
        title: 'About Us',
        url: '/about-us'
    }
];

const SocialMediaList = [Google, Instagram, FaceBook, Twitter];

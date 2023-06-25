import styles from './index.module.css';
import Image from 'next/image';
import Logo from '../../public/logo/logo.svg';
import LetsTalkMessage from '../../public/assets/letsTalkMessage.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { links } from '@/utils/constants';
import {
    InitialValuesType,
    ModalType,
    ModelContext
} from '@/context/modal.context';
import { useContext } from 'react';

const Navbar = () => {
    const router = useRouter();
    const { handleOpenModal } = useContext(ModelContext) as InitialValuesType;

    return (
        <div className="h-[75px] bg-[#f5f5f5]">
            <div className="bg-[#FFFFFF] fixed py-5 w-screen z-50">
                <div className="px-[50px] xl:px-[150px] flex items-center justify-between m-auto">
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="Secure Sure"
                            width={220}
                            priority
                            quality={100}
                        />
                    </Link>

                    <div className={`flex items-center ${styles.navLinks}`}>
                        {navbarLinks.map((link) => {
                            return (
                                <Link
                                    key={link.id}
                                    href={link.url}
                                    className={`${
                                        router.pathname === link.url
                                            ? styles.active
                                            : ''
                                    }`}
                                >
                                    {link.title}
                                </Link>
                            );
                        })}
                    </div>

                    <div
                        className="w-[130px] h-[35px] bg-[#EAF2FF] text-[#546FFF] border border-[#546FFF] flex items-center justify-center gap-1 rounded-[60px] cursor-pointer"
                        onClick={() => handleOpenModal(ModalType['contact-us'])}
                    >
                        <p>Let&apos;s talk</p>
                        <Image
                            src={LetsTalkMessage}
                            alt="Let's talk"
                            width={15}
                        />
                    </div>
                </div>
            </div>

            <div />
        </div>
    );
};

export default Navbar;

const navbarLinks = [
    {
        id: 'home',
        title: 'Home',
        url: links.home
    },
    {
        id: 'alliance',
        title: 'Alliance',
        url: links.alliance
    },
    {
        id: 'brochures',
        title: 'Brochures',
        url: links.brochures
    },
    {
        id: 'forms',
        title: 'Forms',
        url: links.forms
    },
    {
        id: 'about-us',
        title: 'About Us',
        url: links.aboutUs
    }
];

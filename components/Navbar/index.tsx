import {
    InitialValuesType,
    ModalType,
    ModelContext
} from '@/context/modal.context';
import { links } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import LetsTalkMessage from '../../public/assets/letsTalkMessage.svg';
import Logo from '../../public/logo/logo.svg';
import styles from './index.module.css';

const Navbar = () => {
    const router = useRouter();
    const { handleOpenModal } = useContext(ModelContext) as InitialValuesType;

    return (
        <div className="h-[50px] sm:h-[75px] bg-[#f5f5f5]">
            <div className="bg-[#FFFFFF] fixed py-3 sm:py-5 w-screen z-50">
                <div className="px-2 md:px-[50px] xl:px-[150px] flex items-center justify-between m-auto">
                    <Link
                        href="/"
                        className="relative h-[26px] w-[150px] sm:w-[220px]"
                    >
                        <Image
                            src={Logo}
                            alt="Secure Sure"
                            fill
                            priority
                            quality={100}
                        />
                    </Link>

                    <div
                        className={`items-center ${styles.navLinks} hidden lg:flex`}
                    >
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
                        className="w-[130px] h-[35px] bg-[#EAF2FF] text-[#546FFF] border border-[#546FFF] hidden lg:flex items-center justify-center gap-1 rounded-[60px] cursor-pointer"
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

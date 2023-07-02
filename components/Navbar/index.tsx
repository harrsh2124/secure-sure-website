import {
    InitialValuesType,
    ModalType,
    ModelContext
} from '@/context/modal.context';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useContext, useState } from 'react';
import LetsTalkMessage from '../../public/assets/letsTalkMessage.svg';
import Logo from '../../public/logo/logo.svg';
import styles from './index.module.css';
import MobileNavbar from './mobile';
import HamburgerMenu from '@/public/assets/hamburger.svg';
import NavLinks from '@/components/Navbar/NavLinks';

const Navbar = () => {
    const router = useRouter();
    const { handleOpenModal } = useContext(ModelContext) as InitialValuesType;

    const [showMobileNavbar, setShowMobileNavbar] = useState(false);

    const handleMobileNavbar = (flag: boolean) => {
        setShowMobileNavbar(flag);
    };

    return (
        <Fragment>
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
                            {NavLinks.map((link) => {
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
                            onClick={() =>
                                handleOpenModal(ModalType['contact-us'])
                            }
                        >
                            <p>Let&apos;s talk</p>
                            <Image
                                src={LetsTalkMessage}
                                alt="Let's talk"
                                width={15}
                            />
                        </div>

                        <div
                            onClick={() => handleMobileNavbar(true)}
                            className="block lg:hidden relative w-[24px] h-[24px] cursor-pointer"
                        >
                            <Image
                                src={HamburgerMenu}
                                alt={'Hamburger Menu'}
                                fill
                            />
                        </div>
                    </div>
                </div>
            </div>

            <MobileNavbar
                showMobileNavbar={showMobileNavbar}
                handleMobileNavbar={handleMobileNavbar}
            />
        </Fragment>
    );
};

export default Navbar;

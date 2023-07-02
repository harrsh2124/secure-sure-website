import NavLinks from '@/components/Navbar/NavLinks';
import Link from 'next/link';
import styles from '@/components/Navbar/index.module.css';
import { useRouter } from 'next/router';
import {
    InitialValuesType,
    ModalType,
    ModelContext
} from '@/context/modal.context';
import Image from 'next/image';
import LetsTalkMessage from '@/public/assets/letsTalkMessage.svg';
import { useContext } from 'react';

const MobileNavbar = ({ showMobileNavbar, handleMobileNavbar }: IProps) => {
    const router = useRouter();
    const { handleOpenModal } = useContext(ModelContext) as InitialValuesType;

    return (
        <div
            className={`absolute top-0 bottom-0 left-0 right-0 bg-white z-[99] transition-transform overflow-hidden flex flex-col gap-6 lg:hidden p-4 ${
                showMobileNavbar ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className="w-full flex justify-end">
                <p onClick={() => handleMobileNavbar(false)}>Close</p>
            </div>

            <div className="flex items-center justify-center flex-1 flex-col gap-8">
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
                            onClick={() => handleMobileNavbar(false)}
                        >
                            {link.title}
                        </Link>
                    );
                })}

                <div
                    className="w-[130px] h-[35px] bg-[#EAF2FF] text-[#546FFF] border border-[#546FFF] flex items-center justify-center gap-1 rounded-[60px] cursor-pointer"
                    onClick={() => {
                        handleOpenModal(ModalType['contact-us']);
                        handleMobileNavbar(false);
                    }}
                >
                    <p>Let&apos;s talk</p>
                    <Image src={LetsTalkMessage} alt="Let's talk" width={15} />
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;

interface IProps {
    showMobileNavbar: boolean;

    handleMobileNavbar(flag: boolean): void;
}

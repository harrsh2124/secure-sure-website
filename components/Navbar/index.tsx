import styles from './index.module.css';
import Image from 'next/image';
import Logo from '../../public/logo/logo.svg';
import LetsTalkMessage from '../../public/assets/letsTalkMessage.svg';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-[#FFFFFF] h-[75px]">
            <div className="fixed py-5 w-screen">
                <div className="px-[50px] xl:px-[150px] flex items-center justify-between m-auto">
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="Secure Sure"
                            width={220}
                            priority
                        />
                    </Link>

                    <div className={`flex items-center ${styles.navLinks}`}>
                        <Link href="/" className={`${styles.active}`}>
                            Home
                        </Link>
                        <Link href="/services">Services</Link>
                        <Link href="/brochures">Brochures</Link>
                        <Link href="/forms">Forms</Link>
                        <Link href="/about-us">About Us</Link>
                    </div>

                    <div className="w-[130px] h-[35px] bg-[#EAF2FF] text-[#546FFF] border border-[#546FFF] flex items-center justify-center gap-1 rounded-[60px] cursor-pointer">
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
        </nav>
    );
};

export default Navbar;

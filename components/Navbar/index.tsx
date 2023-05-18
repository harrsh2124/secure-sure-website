import Image from 'next/image';
import Logo from '../../public/logo/logo.svg';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 shadow-md fixed w-screen bg-white z-50">
            <div>
                <div className="relative wi">
                    <Image src={Logo} alt="Secure Sure" width={220} />
                </div>
            </div>

            <div className="flex gap-3">
                {/* <p>About us</p> */}

                {/* <p>Contact us</p> */}
            </div>
        </nav>
    );
};

export default Navbar;

import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 shadow-md fixed w-screen bg-white z-50">
            <div>
                <p className="text-3xl">Logo</p>
            </div>

            <div className="flex gap-3">
                {/* <p>About us</p> */}

                {/* <p>Contact us</p> */}
            </div>
        </nav>
    );
};

export default Navbar;

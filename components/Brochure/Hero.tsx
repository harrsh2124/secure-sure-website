import React from 'react';

const Hero = () => {
    return (
        <div className="flex items-center my-[90px] gap-[50px] px-[50px] xl:px-[150px]">
            <div className="flex-1">
                <p className="text-[#546FFF]">Brochures</p>

                <h1 className="font-[700] text-[15px] sm:text-[25px] md:text-[30px] lg:text-[35px] text-[#546FFF]">
                    Get details of every policy
                </h1>
            </div>

            <div className="w-1/2">
                <p>
                    Trust us to be your reliable partner in navigating the
                    complex world of insurance, as we strive to exceed your
                    expectations and deliver unparalleled customer satisfaction.
                </p>
            </div>
        </div>
    );
};

export default Hero;

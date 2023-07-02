import React from 'react';

const Hero = () => {
    return (
        <div className="flex items-start md:items-center flex-col md:flex-row my-5 sm:my-[90px] gap-[10px] md:gap-[50px] px-4 md:px-[50px] xl:px-[150px]">
            <div className="flex-1">
                <p className="text-[#546FFF]">Our alliance</p>

                <h1 className="font-[700] text-[25px] md:text-[30px] lg:text-[35px] text-[#546FFF]">
                    Companies we are working with
                </h1>
            </div>

            <div className="w-full md:w-1/2">
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

import Image from 'next/image';
import HeroVector from '../../public/assets/AboutUs/aboutUsHeroVector.svg';

const Hero = () => {
    return (
        <div className="flex items-center flex-col lg:flex-row my-[50px] lg:my-[90px] gap-[50px] px-[1rem] md:px-[50px] xl:px-[150px]">
            <div className="flex-1">
                <div className="m-auto relative w-[300px] md:w-[500px] lg:w-[400px] h-[300px] md:h-[500px] lg:h-[400px]">
                    <Image
                        src={HeroVector}
                        alt="Your family is secured."
                        fill
                        priority
                    />
                </div>
            </div>

            <div className="w-full lg:w-1/2">
                <p className="text-[#546FFF]">About us</p>

                <h1 className="font-[700] text-[25px] md:text-[30px] lg:text-[35px] text-[#546FFF]">
                    What we are as secure sure?
                </h1>

                <p className="mt-[25px]">
                    Trust us to be your reliable partner in navigating the
                    complex world of insurance, as we strive to exceed your
                    expectations and deliver unparalleled customer satisfaction.
                </p>

                <p className="mt-[15px]">
                    Trust us to be your reliable partner in navigating the
                    complex world of insurance, as we strive to exceed your
                    expectations and deliver unparalleled customer satisfaction.
                </p>
            </div>
        </div>
    );
};

export default Hero;

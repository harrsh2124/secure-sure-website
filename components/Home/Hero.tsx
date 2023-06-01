import Image from 'next/image';
import HeroVector from '../../public/assets/heroVector.svg';
import React from 'react';
import Link from 'next/link';
import One from '../../public/assets/Home/1.svg';
import Two from '../../public/assets/Home/2.svg';
import ManOne from '../../public/assets/Home/People/1.jpg';
import ManTwo from '../../public/assets/Home/People/2.jpg';
import ManThree from '../../public/assets/Home/People/3.jpg';
import ManFour from '../../public/assets/Home/People/4.jpg';

const Hero = () => {
    return (
        <div className="flex items-center mt-[90px] gap-[50px]">
            <div className="w-1/2">
                <h1 className="font-[700] text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-[#546FFF]">
                    Your Trusted Source for Comprehensive Coverage
                </h1>

                <p className="mt-[25px]">
                    Trust us to be your reliable partner in navigating the
                    complex world of insurance, as we strive to exceed your
                    expectations and deliver unparalleled customer satisfaction.
                </p>

                <div className="flex gap-[25px] my-[40px]">
                    <div className="bg-[#546FFF] py-[10px] px-[35px] rounded-[100px] text-white">
                        <p>Chat with us</p>
                    </div>

                    <div className="relative">
                        <div className="bg-[#E1FFF1] border border-[#309C68] text-[#309C68] py-[10px] px-[35px] rounded-[100px]">
                            <Link href="/services">Explore services</Link>
                        </div>

                        <Image
                            src={One}
                            alt="Explore services"
                            width={20}
                            className="absolute bottom-[-15px] right-[-11px]"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex">
                        <span className="rounded-[50%] relative inline-block overflow-hidden border-4 border-white">
                            <Image
                                src={ManOne}
                                alt="Happy Customer"
                                quality={80}
                                width={55}
                            />
                        </span>

                        <span className="rounded-[50%] relative inline-block overflow-hidden ml-[-30px] border-4 border-white">
                            <Image
                                src={ManTwo}
                                alt="Happy Customer"
                                quality={80}
                                width={55}
                            />
                        </span>

                        <span className="rounded-[50%] relative inline-block overflow-hidden ml-[-30px] border-4 border-white">
                            <Image
                                src={ManThree}
                                alt="Happy Customer"
                                quality={80}
                                width={55}
                            />
                        </span>

                        <span className="rounded-[50%] relative inline-block overflow-hidden ml-[-30px] border-4 border-white">
                            <Image
                                src={ManFour}
                                alt="Happy Customer"
                                quality={80}
                                width={55}
                            />
                        </span>
                    </div>

                    <div className="relative">
                        <p className="text-[#309C68] underline">
                            2000+ satisfied and happy customers
                        </p>

                        <Image
                            src={Two}
                            alt="Explore services"
                            width={20}
                            className="absolute bottom-[-16px] right-[-18px]"
                        />
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <Image
                    src={HeroVector}
                    alt="Your family is secured."
                    width={680}
                    height={600}
                    className="m-auto"
                    priority
                />
            </div>
        </div>
    );
};

export default Hero;

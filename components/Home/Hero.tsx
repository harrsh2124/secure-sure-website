import Image from 'next/image';
import Link from 'next/link';
import One from '../../public/assets/Home/1.svg';
import Two from '../../public/assets/Home/2.svg';
import ManOne from '../../public/assets/Home/People/1.jpg';
import ManTwo from '../../public/assets/Home/People/2.jpg';
import ManThree from '../../public/assets/Home/People/3.jpg';
import ManFour from '../../public/assets/Home/People/4.jpg';
import HeroVector from '../../public/assets/heroVector.svg';

const Hero = () => {
    return (
        <div className="flex items-center mt-[90px] gap-[50px] px-[50px] xl:px-[150px]">
            <div className="w-1/2">
                <h1 className="font-[700] text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-[#546FFF]">
                    We help you find the best Insurance Plan at the right price
                </h1>

                <p className="font-[500] mt-[25px]">
                    Do you want to protect your future and ensure your peace of
                    mind? At Secure Sure Insurance Agency, we understand the
                    importance of safeguarding. We offer comprehensive insurance
                    services with reliable coverage, the best insurance advice,
                    and customized solutions tailored to your specific needs.
                    Whether you need health insurance, term insurance, travel
                    insurance, or vehicle insurance, you will get all under one
                    roof.
                </p>

                <div className="flex gap-[25px] my-[40px]">
                    <div className="bg-[#546FFF] py-[10px] px-[35px] rounded-[100px] text-white cursor-pointer">
                        <p>Chat with us</p>
                    </div>

                    <div className="relative">
                        <Link href="/services">
                            <div className="bg-[#E1FFF1] border border-[#309C68] text-[#309C68] py-[10px] px-[35px] rounded-[100px]">
                                Explore services
                            </div>
                        </Link>

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

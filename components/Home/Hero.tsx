import {
    InitialValuesType,
    ModalType,
    ModelContext
} from '@/context/modal.context';
import { links } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import One from '../../public/assets/Home/1.svg';
import Two from '../../public/assets/Home/2.svg';
import ManOne from '../../public/assets/Home/People/1.jpg';
import ManTwo from '../../public/assets/Home/People/2.jpg';
import ManThree from '../../public/assets/Home/People/3.jpg';
import ManFour from '../../public/assets/Home/People/4.jpg';
import HeroVector from '../../public/assets/heroVector.svg';

const Hero = () => {
    const { handleOpenModal } = useContext(ModelContext) as InitialValuesType;

    return (
        <div className="flex items-center flex-col-reverse lg:flex-row mt-[90px] gap-[50px] px-[1rem] md:px-[50px] xl:px-[150px]">
            <div className="w-full lg:w-1/2">
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
                <div className="flex gap-[25px] flex-col sm:flex-row my-[40px]">
                    <div
                        className="bg-[#546FFF] py-[10px] px-[35px] rounded-[100px] text-white cursor-pointer w-[170px] flex"
                        onClick={() => handleOpenModal(ModalType['contact-us'])}
                    >
                        <p className="m-auto">Chat with us</p>
                    </div>

                    <div className="relative w-[200px] flex">
                        <Link href={links.alliance}>
                            <div className="bg-[#E1FFF1] border border-[#309C68] text-[#309C68] py-[10px] px-[35px] rounded-[100px] m-auto flex">
                                <p className="m-auto">Explore services</p>
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

                <div className="flex md:items-center gap-4 flex-col md:flex-row">
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

                    <div className="relative w-[300px]">
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

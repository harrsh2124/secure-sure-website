import Image from 'next/image';
import CarGreen from '../../public/assets/Home/Services/carGreen.svg';
import FamilyGreen from '../../public/assets/Home/Services/familyGreen.svg';
import HeartGreen from '../../public/assets/Home/Services/heartGreen.svg';
import UmbrellaGreen from '../../public/assets/Home/Services/umbrellaGreen.svg';
import ArrowRight from '../../public/assets/Home/Services/arrowRight.svg';
import React from 'react';

const Services = () => {
    return (
        <div className="bg-[#F2FFF9] text-[#309C68] px-[50px] xl:px-[150px] py-[60px] flex flex-col items-center">
            <p>Services</p>

            <h2 className="text-[30px] font-[700] mt-[1.5rem] mb-[0.5rem]">
                What we offer to you
            </h2>

            <p className="text-center px-[13rem] mb-[2rem]">
                Trust us to be your reliable partner in navigating the complex
                world of insurance, as we strive to exceed your expectations and
                deliver unparalleled customer satisfaction.
            </p>

            <div className="grid grid-cols-2 w-full gap-2">
                {services.map((service) => {
                    return (
                        <div
                            key={service.id}
                            className="border border-[#309C68] px-8 py-8 rounded-[30px]"
                        >
                            <div className="flex items-center">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={20}
                                />

                                <div>
                                    <Image
                                        src={ArrowRight}
                                        alt="Know more"
                                        width={20}
                                    />
                                </div>
                            </div>

                            <p className="font-[700]">{service.title}</p>

                            <p className="font-[400]">{service.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;

const services = [
    {
        id: 1,
        icon: HeartGreen,
        title: 'Health insurance',
        description:
            'Trust us to be your reliable partner in navigating the complex world of insurance, as we strive to exceed your expectations and deliver unparalleled customer satisfaction.'
    },
    {
        id: 2,
        icon: HeartGreen,
        title: 'Health insurance',
        description:
            'Trust us to be your reliable partner in navigating the complex world of insurance, as we strive to exceed your expectations and deliver unparalleled customer satisfaction.'
    },
    {
        id: 3,
        icon: HeartGreen,
        title: 'Health insurance',
        description:
            'Trust us to be your reliable partner in navigating the complex world of insurance, as we strive to exceed your expectations and deliver unparalleled customer satisfaction.'
    },
    {
        id: 4,
        icon: HeartGreen,
        title: 'Health insurance',
        description:
            'Trust us to be your reliable partner in navigating the complex world of insurance, as we strive to exceed your expectations and deliver unparalleled customer satisfaction.'
    }
];

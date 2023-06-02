import Image from 'next/image';
import ArrowRight from '../../public/assets/Home/Services/arrowRight.svg';
import CarGreen from '../../public/assets/Home/Services/carGreen.svg';
import FamilyGreen from '../../public/assets/Home/Services/familyGreen.svg';
import HeartGreen from '../../public/assets/Home/Services/heartGreen.svg';
import UmbrellaGreen from '../../public/assets/Home/Services/umbrellaGreen.svg';
import LetsTalkMessage from '../../public/assets/letsTalkMessage.svg';

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

            <div className="grid grid-cols-2 w-full gap-6 xl:gap-8">
                {services.map((service) => {
                    return (
                        <div
                            key={service.id}
                            className="border border-[#309C68] px-8 py-8 rounded-[20px]"
                        >
                            <div className="flex items-center justify-between">
                                <div className="h-[35px] w-[35px] relative">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        fill
                                        className="absolute"
                                    />
                                </div>

                                <div className="bg-[#309C68] p-1 rounded-full cursor-pointer">
                                    <Image
                                        src={ArrowRight}
                                        alt="Know more"
                                        width={25}
                                    />
                                </div>
                            </div>

                            <p className="font-[700] mt-5 mb-3">
                                {service.title}
                            </p>

                            <p className="font-[400]">{service.description}</p>
                        </div>
                    );
                })}
            </div>

            <div className="flex items-center rounded-full border-2 border-[#309C68]/40 py-3 px-5 mt-10 gap-4 cursor-pointer">
                <p className="font-[700]">Contact us for more services</p>

                <Image src={LetsTalkMessage} alt="Let's talk" width={15} />
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
        icon: CarGreen,
        title: 'Health insurance',
        description:
            'Trust us to be your reliable partner in navigating the complex world of insurance, as we strive to exceed your expectations and deliver unparalleled customer satisfaction.'
    },
    {
        id: 3,
        icon: FamilyGreen,
        title: 'Health insurance',
        description:
            'Trust us to be your reliable partner in navigating the complex world of insurance, as we strive to exceed your expectations and deliver unparalleled customer satisfaction.'
    },
    {
        id: 4,
        icon: UmbrellaGreen,
        title: 'Health insurance',
        description:
            'Trust us to be your reliable partner in navigating the complex world of insurance, as we strive to exceed your expectations and deliver unparalleled customer satisfaction.'
    }
];

import Image from 'next/image';
import One from '../../public/assets/Home/Process/1.svg';
import Two from '../../public/assets/Home/Process/2.svg';
import Three from '../../public/assets/Home/Process/3.svg';
import Line from '../../public/assets/Home/Process/line.svg';

const Process = () => {
    return (
        <div className="bg-[#F2FFF9] text-[#309C68] px-[1rem] md:px-[50px] xl:px-[150px] py-[60px] flex flex-col items-center">
            <p>Our process</p>

            <h2 className="text-[30px] font-[700] mt-[1.5rem] mb-[0.5rem]">
                Easiest process that we follow
            </h2>

            <p className="text-center lg:px-[13rem] mb-[2rem]">
                Trust us to be your reliable partner in navigating the complex
                world of insurance, as we strive to exceed your expectations and
                deliver unparalleled customer satisfaction.
            </p>

            <div className="flex flex-col lg:flex-row">
                {processes.map((process, index) => {
                    return (
                        <div
                            key={process.id}
                            className="flex items-center flex-col lg:flex-row gap-4 lg:gap-0"
                        >
                            <div className="border-2 border-[#309C68] bg-white rounded-full flex flex-col items-center justify-center h-[230px] w-[230px] p-[30px]">
                                <Image
                                    src={process.icon}
                                    alt={process.title}
                                    width={30}
                                />

                                <p className="font-[700] text-center mt-4 mb-3">
                                    {process.title}
                                </p>

                                <p className="text-[12px] text-center">
                                    {process.description}
                                </p>
                            </div>

                            {index < 2 ? (
                                <Image
                                    src={Line}
                                    alt="Secure Sure"
                                    width={60}
                                    className="rotate-90 lg:rotate-0 mb-6 lg:mb-0 mt-2 lg:mt-0"
                                />
                            ) : null}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Process;

const processes = [
    {
        id: 1,
        icon: One,
        title: 'Select your policy category',
        description:
            'Trust us to be your reliable partner in navigating the complex world of.'
    },
    {
        id: 2,
        icon: Two,
        title: 'Submit necessary papers',
        description:
            'Trust us to be your reliable partner in navigating the complex world of.'
    },
    {
        id: 3,
        icon: Three,
        title: 'Complete and received policy',
        description:
            'Trust us to be your reliable partner in navigating the complex world of.'
    }
];

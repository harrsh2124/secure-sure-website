import Image from 'next/image';
import Header from '../../public/assets/Home/Advantages/Header.svg';
import React, { useEffect, useState } from 'react';

const Advantages = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [toggleResetActiveTab, setToggleResetActiveTab] = useState(false);

    useEffect(() => {
        const changeActiveTab = setInterval(() => {
            setActiveTab((prev) => {
                if (prev === 3) {
                    return 1;
                } else return prev + 1;
            });
        }, 5000);

        return () => {
            console.log('Clear interval');
            clearInterval(changeActiveTab);
        };
    }, [toggleResetActiveTab]);

    return (
        <div className="text-[#546FFF] px-[50px] xl:px-[150px] py-[60px]">
            <div className="flex justify-between items-center">
                <div className="relative">
                    <p className="font-[700] text-[30px]">
                        Advantages with Policy Wise
                    </p>

                    <Image
                        src={Header}
                        alt="Advantages with Policy Wise"
                        className="absolute bottom-[-10px] right-[-15px]"
                        width={15}
                    />
                </div>

                <div className="flex gap-4">
                    {AdvantagesTitle.map((advantage) => {
                        return (
                            <div
                                onClick={() => {
                                    setActiveTab(advantage.id);
                                    setToggleResetActiveTab((prev) => !prev);
                                }}
                                key={advantage.id}
                                className={`py-2 px-8 rounded-full transition duration-500 ${
                                    activeTab === advantage.id
                                        ? 'bg-[#546FFF] text-white'
                                        : 'bg-[#EAF2FF]'
                                }`}
                            >
                                <p>{advantage.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Advantages;

const AdvantagesTitle = [
    {
        id: 1,
        title: 'Simple'
    },
    {
        id: 2,
        title: 'Fast'
    },
    {
        id: 3,
        title: 'Secure'
    }
];

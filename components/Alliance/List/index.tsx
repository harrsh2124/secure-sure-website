import React, { Fragment } from 'react';
import ArrowRight from '../../../public/assets/Alliance/arrowRight.svg';
import AlliancesList from './AlliancesList';
import Image from 'next/image';

const List = () => {
    return (
        <div className="grid grid-cols-2 xl:grid-cols-3 justify-evenly my-[90px] gap-[50px] px-[50px] xl:px-[150px]">
            {AlliancesList.map((alliance) => {
                return (
                    <div
                        key={alliance.id}
                        className="flex items-center justify-evenly gap-4 bg-[#EAF2FF] px-6 py-4 rounded-full"
                    >
                        <div className="flex w-[7rem]">
                            <div
                                className={`relative w-[${
                                    alliance.width || '6rem'
                                }] m-auto`}
                            >
                                <Image
                                    src={alliance.icon}
                                    alt={alliance.title}
                                />
                            </div>
                        </div>

                        <p className="w-[6rem]">{alliance.title}</p>

                        <div className="p-3 flex rounded-full bg-[#E0ECFF] relative w-[3rem] cursor-pointer hover:-rotate-45 transition-transform">
                            <Image
                                src={ArrowRight}
                                alt="Right arrow"
                                className="m-auto"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default List;
import {
    InitialValuesType,
    ModalType,
    ModelContext
} from '@/context/modal.context';
import Image from 'next/image';
import { Fragment, useContext } from 'react';
import ArrowRight from '../../../public/assets/Alliance/arrowRight.svg';
import AlliancesList from './AlliancesList';

const List = () => {
    const { handleOpenModal, handleSetExternalLink } = useContext(
        ModelContext
    ) as InitialValuesType;

    return (
        <Fragment>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-evenly my-5 sm:my-[90px] gap-[20px] sm:gap-[50px] px-4 md:px-[50px] xl:px-[150px]">
                {AlliancesList.map((alliance) => {
                    return (
                        <div
                            key={alliance.id}
                            className="flex items-center justify-between gap-4 bg-[#EAF2FF] px-6 py-4 rounded-full"
                        >
                            <div className="flex items-center gap-4 w-[84%]">
                                <div className="w-[7rem] hidden sm:flex">
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

                                <p className="overflow-hidden whitespace-nowrap text-ellipsis flex-1">
                                    {alliance.title}
                                </p>
                            </div>

                            <div
                                className="p-3 flex rounded-full bg-[#E0ECFF] relative w-[3rem] cursor-pointer hover:-rotate-45 transition-transform"
                                onClick={() => {
                                    handleSetExternalLink(alliance.cbmLink);
                                    handleOpenModal(
                                        ModalType['alliance-type-options']
                                    );
                                }}
                            >
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
        </Fragment>
    );
};

export default List;

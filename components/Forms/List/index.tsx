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
    const { handleOpenModal, handleSetBrochures } = useContext(
        ModelContext
    ) as InitialValuesType;

    return (
        <Fragment>
            <div className="grid grid-cols-2 xl:grid-cols-3 justify-evenly my-[90px] gap-[50px] px-[50px] xl:px-[150px]">
                {AlliancesList.map((alliance) => {
                    return (
                        <div
                            key={alliance.id}
                            className="flex items-center justify-between gap-4 bg-[#EAF2FF] px-6 py-4 rounded-full"
                        >
                            <p className="overflow-hidden whitespace-nowrap text-ellipsis flex-1">
                                {alliance.title}
                            </p>

                            <div
                                className="p-3 flex rounded-full bg-[#E0ECFF] relative w-[3rem] cursor-pointer hover:-rotate-45 transition-transform"
                                onClick={() => {
                                    handleSetBrochures({
                                        title: alliance.title,
                                        brochures: alliance.brochures
                                    });
                                    handleOpenModal(
                                        ModalType['brochures-list']
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

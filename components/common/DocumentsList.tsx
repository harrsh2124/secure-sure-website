import {
    InitialValuesType,
    ModalType,
    ModelContext
} from '@/context/modal.context';
import Image from 'next/image';
import { Fragment, useContext } from 'react';
import ArrowRight from '@/public/assets/Alliance/arrowRight.svg';

const List = ({ ListData }: IProps) => {
    const { handleOpenModal, handleSetBrochures } = useContext(
        ModelContext
    ) as InitialValuesType;

    return (
        <Fragment>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-evenly my-5 sm:my-[90px] gap-[20px] sm:gap-[50px] px-4 md:px-[50px] xl:px-[150px]">
                {ListData.map((data) => {
                    return (
                        <div
                            key={data.id}
                            className="flex items-center justify-between gap-4 bg-[#EAF2FF] px-6 py-2 md:py-4 rounded-full"
                        >
                            <p className="overflow-hidden whitespace-nowrap text-ellipsis flex-1">
                                {data.title}
                            </p>

                            <div
                                className="p-3 flex rounded-full bg-[#E0ECFF] relative w-[3rem] cursor-pointer hover:-rotate-45 transition-transform"
                                onClick={() => {
                                    handleSetBrochures({
                                        title: data.title,
                                        brochures: data.brochures
                                    });
                                    handleOpenModal(
                                        ModalType['documents-list']
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

interface IProps {
    ListData: {
        id: number;
        title: string;
        brochures: {
            id: number;
            file: string;
            title: string;
        }[];
    }[];
}

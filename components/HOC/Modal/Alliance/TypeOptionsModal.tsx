import {
    InitialValuesType,
    ModalType,
    ModelContext
} from '@/context/modal.context';
import React, { useContext } from 'react';

const TypeOptionsModal = () => {
    const { handleOpenModal, handlePrevModal } = useContext(
        ModelContext
    ) as InitialValuesType;

    return (
        <div className="min-w-[30vw] flex justify-between items-center p-6">
            <p className="cursor-pointer bg-[#EAF2FF] px-6 py-4 rounded-md">
                Buy new
            </p>

            <p
                className="cursor-pointer bg-[#EAF2FF] px-6 py-4 rounded-md"
                onClick={() => {
                    handleOpenModal(ModalType['renewal']);
                    handlePrevModal(ModalType['alliance-type-options']);
                }}
            >
                Renew
            </p>
        </div>
    );
};

export default TypeOptionsModal;

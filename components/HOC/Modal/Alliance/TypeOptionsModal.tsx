import {
    InitialValuesType,
    ModalType,
    ModelContext
} from '@/context/modal.context';
import { useContext } from 'react';

const TypeOptionsModal = () => {
    const { handleOpenModal, handlePrevModal } = useContext(
        ModelContext
    ) as InitialValuesType;

    return (
        <div className="min-w-[30vw] flex justify-between items-center gap-[3rem] p-6">
            <p
                className="cursor-pointer bg-[#EAF2FF] px-6 py-4 rounded-md"
                onClick={() => {
                    handleOpenModal(ModalType['new-policy']);
                    handlePrevModal(ModalType['alliance-type-options']);
                }}
            >
                Buy new
            </p>

            <p
                className="cursor-pointer bg-[#EAF2FF] px-6 py-4 rounded-md"
                onClick={() => {
                    handleOpenModal(ModalType['policy-renewal']);
                    handlePrevModal(ModalType['alliance-type-options']);
                }}
            >
                Renew
            </p>
        </div>
    );
};

export default TypeOptionsModal;

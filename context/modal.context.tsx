import { createContext, useState } from 'react';

export type InitialValuesType = {
    isModalOpen: boolean;
    type: ModalType | '';
    prevModal?: ModalType;
    handleCloseModal: () => void;
    handleOpenModal: (type: ModalType) => void;
    handlePrevModal: (value: ModalType) => void;
};
export const ModelContext = createContext<InitialValuesType | null>(null);

const ModelProvider = ({ children }: { children: JSX.Element }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<ModalType | ''>('');
    const [prevModal, setPrevModal] = useState<ModalType>();

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalType('');
        handlePrevModal();
    };

    const handleOpenModal = (type: ModalType) => {
        setModalType(type);
        setIsModalOpen(true);
        handlePrevModal();
    };

    const handlePrevModal = (value?: ModalType) => setPrevModal(value);

    return (
        <ModelContext.Provider
            value={{
                isModalOpen,
                type: modalType,
                prevModal,
                handleCloseModal,
                handleOpenModal,
                handlePrevModal
            }}
        >
            {children}
        </ModelContext.Provider>
    );
};

export default ModelProvider;

export enum ModalType {
    'contact-us',
    'alliance-type-options',
    'renewal'
}

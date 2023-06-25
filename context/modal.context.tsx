import { createContext, useState } from 'react';

export type InitialValuesType = {
    isModalOpen: boolean;
    type: ModalType | '';
    prevModal?: ModalType;
    externalLink: string | undefined;
    handleCloseModal: () => void;
    handleOpenModal: (type: ModalType) => void;
    handlePrevModal: (value: ModalType) => void;
    handleSetExternalLink: (value: string | undefined) => void;
};
export const ModelContext = createContext<InitialValuesType | null>(null);

const ModelProvider = ({ children }: { children: JSX.Element }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<ModalType | ''>('');
    const [prevModal, setPrevModal] = useState<ModalType>();
    const [externalLink, setExternalLink] = useState<string>();

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalType('');
        handlePrevModal();
        setExternalLink(undefined);
    };

    const handleOpenModal = (type: ModalType) => {
        setModalType(type);
        setIsModalOpen(true);
        handlePrevModal();
    };

    const handleSetExternalLink = (value: string | undefined) => {
        setExternalLink(value);
    };

    const handlePrevModal = (value?: ModalType) => setPrevModal(value);

    return (
        <ModelContext.Provider
            value={{
                isModalOpen,
                type: modalType,
                prevModal,
                externalLink,
                handleCloseModal,
                handleOpenModal,
                handlePrevModal,
                handleSetExternalLink
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
    'policy-renewal',
    'new-policy'
}

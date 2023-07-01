import { createContext, useState } from 'react';

export type InitialValuesType = {
    isModalOpen: boolean;
    type: ModalType | '';
    prevModal?: ModalType;
    externalLink: string | undefined;
    brochures: brochuresList;
    handleCloseModal: () => void;
    handleOpenModal: (type: ModalType) => void;
    handlePrevModal: (value: ModalType) => void;
    handleSetExternalLink: (value: string | undefined) => void;
    handleSetBrochures(brochures: brochuresList): void;
};
export const ModelContext = createContext<InitialValuesType | null>(null);

const ModelProvider = ({ children }: { children: JSX.Element }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<ModalType | ''>('');
    const [prevModal, setPrevModal] = useState<ModalType>();
    const [externalLink, setExternalLink] = useState<string>();
    const [brochures, setBrochures] = useState<brochuresList>();

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalType('');
        handlePrevModal();
        setExternalLink(undefined);
        setBrochures(undefined);
    };

    const handleOpenModal = (type: ModalType) => {
        setModalType(type);
        setIsModalOpen(true);
        handlePrevModal();
    };

    const handleSetExternalLink = (value: string | undefined) => {
        setExternalLink(value);
    };

    const handleSetBrochures = (brochures: brochuresList) => {
        setBrochures(brochures);
    };

    const handlePrevModal = (value?: ModalType) => setPrevModal(value);

    return (
        <ModelContext.Provider
            value={{
                isModalOpen,
                type: modalType,
                prevModal,
                externalLink,
                brochures,
                handleCloseModal,
                handleOpenModal,
                handlePrevModal,
                handleSetExternalLink,
                handleSetBrochures
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
    'new-policy',
    'brochures-list'
}

type brochuresList =
    | {
          title: string;
          brochures: {
              id: number;
              file: string;
              title: string;
          }[];
      }
    | undefined;

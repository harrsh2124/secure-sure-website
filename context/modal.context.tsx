import React, { SetStateAction, createContext, useState } from 'react';

export type InitialValuesType = {
    isChatWithUsModalOpen: boolean;
    handleCloseModal: () => void;
    handleOpenModal: () => void;
};
export const ModelContext = createContext<InitialValuesType | null>(null);

const ModelProvider = ({ children }: { children: JSX.Element }) => {
    const [isChatWithUsModalOpen, setIsChatWithUsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsChatWithUsModalOpen(false);
    };

    const handleOpenModal = () => {
        setIsChatWithUsModalOpen(true);
    };

    return (
        <ModelContext.Provider
            value={{
                isChatWithUsModalOpen,
                handleCloseModal,
                handleOpenModal
            }}
        >
            {children}
        </ModelContext.Provider>
    );
};

export default ModelProvider;

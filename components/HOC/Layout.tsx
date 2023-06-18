import { InitialValuesType, ModelContext } from '@/context/modal.context';
import { useContext } from 'react';
import Modal from './Modal';
import ContactUsModal from './Modal/ContactUsModal';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const { handleCloseModal: handleCloseModalContext, isChatWithUsModalOpen } =
        useContext(ModelContext) as InitialValuesType;

    return (
        <div>
            <Modal
                isOpen={isChatWithUsModalOpen}
                handleModalClose={handleCloseModalContext}
            >
                <ContactUsModal />
            </Modal>

            {children}
        </div>
    );
};

export default Layout;

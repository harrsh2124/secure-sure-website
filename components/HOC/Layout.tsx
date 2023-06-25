import {
    InitialValuesType,
    ModalType,
    ModelContext
} from '@/context/modal.context';
import { useContext } from 'react';
import Modal from './Modal';
import NewPolicyModal from './Modal/Alliance/NewPolicyModal';
import TypeOptionsModal from './Modal/Alliance/TypeOptionsModal';
import ContactUsModal from './Modal/ContactUsModal';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const { type } = useContext(ModelContext) as InitialValuesType;

    return (
        <div>
            <Modal>
                {type === ModalType['contact-us'] ||
                type === ModalType['policy-renewal'] ? (
                    <ContactUsModal />
                ) : type === ModalType['alliance-type-options'] ? (
                    <TypeOptionsModal />
                ) : type === ModalType['new-policy'] ? (
                    <NewPolicyModal />
                ) : (
                    <div></div>
                )}
            </Modal>

            {children}
        </div>
    );
};

export default Layout;

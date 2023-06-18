import { MouseEvent } from 'react';

const Modal = ({ isOpen, handleModalClose, children }: IProps) => {
    if (!isOpen) {
        return null;
    }

    const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        if (e.target.id === 'wrapper') {
            handleModalClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-30"
            id="wrapper"
            onClick={handleCloseModal}
        >
            <div className="max-w-3/4 bg-white p-4 rounded-xl mt-20">
                <div className="overflow-auto max-h-[70vh]">{children}</div>
            </div>
        </div>
    );
};

export default Modal;

interface IProps {
    isOpen: boolean;
    handleModalClose: () => void;
    children: JSX.Element;
}

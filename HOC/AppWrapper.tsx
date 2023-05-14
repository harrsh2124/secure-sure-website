import React, { useEffect } from 'react';

const AppWrapper = ({ children }: IProps) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className="px-8 flex-1 min-h-[85vh] md:min-h-[91vh] flex items-center">
            {children}
        </div>
    );
};

export default AppWrapper;

interface IProps {
    children: JSX.Element[] | JSX.Element | null;
}

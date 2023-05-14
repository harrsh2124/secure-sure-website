import React, { useEffect } from 'react';

const AppWrapper = ({ children }: IProps) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div
            className="px-8 flex items-center"
            style={{
                minHeight: '90vh'
            }}
        >
            {children}
        </div>
    );
};

export default AppWrapper;

interface IProps {
    children: JSX.Element[] | JSX.Element | null;
}

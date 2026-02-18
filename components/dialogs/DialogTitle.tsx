import React from 'react';

interface DialogTitleProps {
    children: React.ReactNode;
}

const DialogTitle = ({ children }: DialogTitleProps) => {
    return (
        <div className="ty-body-lg border-b border-b-accent-light/20 px-4 py-3 dark:border-b-accent-dark/10">
            {children}
        </div>
    );
};

export default DialogTitle;

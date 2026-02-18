import React from 'react';

interface DialogContentProps {
    children: React.ReactNode;
}

const DialogContent = ({ children }: DialogContentProps) => {
    return (
        <div className="ty-body dialog-content flex-1 overflow-y-auto px-6 py-4">
            {children}
        </div>
    );
};

export default DialogContent;

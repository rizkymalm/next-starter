import type { ReactNode } from 'react';

import Portal from './Portal';

interface OverlayProps {
    children: ReactNode;
    zIndex?: number;
}

const Overlay = ({ children, zIndex = 9999 }: OverlayProps) => {
    return (
        <Portal>
            <div className="fixed inset-0" style={{ zIndex }}>
                {children}
            </div>
        </Portal>
    );
};

export default Overlay;

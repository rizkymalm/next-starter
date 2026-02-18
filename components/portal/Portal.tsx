import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    containerId?: string;
}

const Portal = ({ children, containerId = 'portal-root' }: PortalProps) => {
    const [mounted, setMounted] = useState(false);
    const [container, setContainer] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setMounted(true);
        const el = document.getElementById(containerId);
        setContainer(el);
    }, [containerId]);

    if (!mounted || !container) return null;

    return createPortal(children, container);
};

export default Portal;

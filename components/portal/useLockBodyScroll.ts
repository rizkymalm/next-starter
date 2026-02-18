import { useEffect } from 'react';

const useLockBodyScroll = (active: boolean) => {
    useEffect(() => {
        if (!active) {
            return undefined;
        }

        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = original;
        };
    }, [active]);
};

export default useLockBodyScroll;

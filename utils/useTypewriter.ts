import { useEffect, useState } from 'react';

const useTypewriter = ({
    text,
    speed,
    start,
}: {
    text: string;
    speed: number;
    start: boolean;
}) => {
    const [display, setDisplay] = useState('');
    const [currIndex, setCurrIndex] = useState(0);
    useEffect(() => {
        if (currIndex >= text.length) return undefined;
        const timeout = setTimeout(() => {
            if (start) {
                setDisplay(prevText => prevText + text[currIndex]);
                setCurrIndex(prevIndex => prevIndex + 1);
            }
        }, speed);
        return () => clearTimeout(timeout);
    }, [text, speed, currIndex, start]);

    return display;
};

export default useTypewriter;

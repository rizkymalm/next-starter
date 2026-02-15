import { useCallback, useEffect, useRef, useState } from 'react';

interface UseScrambleOptions {
    text: string;
    speed?: number; // Speed of scrambling in ms
    scramble?: number; // Number of scramble iterations
    easing?: (t: number) => number;
}

export const useScramble = ({
    text,
    speed = 50,
    scramble = 3,
}: UseScrambleOptions) => {
    const [displayedText, setDisplayedText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

    const scrambleEffect = useCallback(() => {
        let iteration = 0;

        // Clear any existing animation
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayedText(prev =>
                prev
                    .split('')
                    .map((char, index) => {
                        const countChar = displayedText.length;
                        // Keep spaces
                        if (char === ' ') return ' ';
                        // Scramble letters
                        const indexx = scramble / countChar;
                        const stopPerChar =
                            scramble - indexx * (countChar - (index + 1));
                        if (iteration <= stopPerChar) {
                            return String.fromCharCode(
                                Math.floor(Math.random() * 26) + 65
                            );
                        }
                        return text[index];
                    })
                    .join('')
            );

            if (iteration >= scramble) {
                clearInterval(intervalRef.current);
                setDisplayedText(text); // Ensure final text is correct
            }
            iteration++;
        }, speed);

        return () => clearInterval(intervalRef.current);
    }, [text, scramble, speed, displayedText.length]);

    // Run on mount or if text changes
    useEffect(() => {
        scrambleEffect();
    }, [scrambleEffect]);

    return { ref: null, text: displayedText, replay: scrambleEffect };
};

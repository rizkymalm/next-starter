import React, { useEffect, useState } from 'react';

import { ButtonPrimary } from '@/components/button';
import TypeWriterEffect from '@/components/features/Typewriter';

const InstructionExplore = ({
    onStartEngine,
}: {
    onStartEngine: () => void;
}) => {
    const [instruction, setInstruction] = useState(0);
    const handleInstruction = () => {
        setInstruction(instruction + 1);
    };
    useEffect(() => {
        const timeout = setTimeout(() => {
            setInstruction(1);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="absolute inset-x-0 bottom-80 z-99 m-auto w-150 max-w-[90%] items-center justify-center text-accent-dark opacity-55">
            <div className="m-auto w-full max-w-screen-md rounded-lg bg-dark-2 drop-shadow-lg">
                <div className="glow-card min-h-72.5 bg-dark-3">
                    <div className="ty-h4 relative z-99 flex h-full gap-4 px-10 py-20 text-accent-light">
                        {instruction === 1 && (
                            <TypeWriterEffect
                                text="Welcome to the Spaceship... This spaceship will take you on an unforgettable and great adventure."
                                speed={50}
                                start={instruction === 1}
                            />
                        )}
                        {instruction === 2 && (
                            <TypeWriterEffect
                                text="Every planet holds a story"
                                speed={50}
                                start={instruction === 2}
                            />
                        )}
                        {instruction === 3 && (
                            <TypeWriterEffect
                                text="Your ship can travel beyond this moon"
                                speed={50}
                                start={instruction === 3}
                            />
                        )}
                        {instruction === 4 && (
                            <TypeWriterEffect
                                text="This is not just space — this is your universe."
                                speed={50}
                                start={instruction === 4}
                            />
                        )}
                        {instruction === 5 && (
                            <TypeWriterEffect
                                text="Are you ready to join this exploration?"
                                speed={50}
                                start={instruction === 5}
                            />
                        )}
                    </div>
                    {instruction === 6 && (
                        <div className="ty-h5 absolute inset-0 z-99 m-auto h-15 w-50 align-middle">
                            <ButtonPrimary
                                text="Start Engine"
                                size="lg"
                                variant="text"
                                type="button"
                                onClick={onStartEngine}
                            />
                        </div>
                    )}
                    {instruction < 6 && (
                        <div className="absolute bottom-0 right-0 z-99 h-15 w-20">
                            <ButtonPrimary
                                text="Next"
                                variant="text"
                                type="button"
                                size="md"
                                onClick={handleInstruction}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InstructionExplore;

import React from 'react';

import { motion, useTransform } from 'framer-motion';
import { useScramble } from '@/utils/useScramble';
import TypeWriterEffect from '@/components/features/Typewriter';

const Greetings = ({ scrollYProgress }: { scrollYProgress: any }) => {
    const textR = useScramble({
        text: 'R',
        speed: 20,
        scramble: 40,
    });
    const textM = useScramble({
        text: 'M',
        speed: 20,
        scramble: 40,
    });

    // const y = useTransform(scrollYProgress, [0, 0.4], ['0%', '-20%']);
    const xRight = useTransform(scrollYProgress, [0, 0.4], ['0%', '150%']);
    const xLeft = useTransform(scrollYProgress, [0, 0.4], ['0%', '-150%']);
    const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.7]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -180]);
    const rotateRight = useTransform(scrollYProgress, [0, 1], [0, 180]);

    return (
        <div className="relative h-screen min-w-full">
            <div className="relative inset-0 z-999 m-auto h-screen w-full items-center justify-center text-center">
                <div className="fixed inset-0 m-auto grid h-50 w-125 grid-cols-2">
                    <motion.span
                        style={{ x: xLeft, scale, opacity, rotate }}
                        className={`ty-super text-right font-rowdies text-accent-dark`}
                    >
                        {textR.text}
                    </motion.span>
                    <motion.span
                        style={{
                            x: xRight,
                            scale,
                            opacity,
                            rotate: rotateRight,
                        }}
                        className={`ty-super text-left font-rowdies text-accent-dark`}
                    >
                        {textM.text}
                    </motion.span>
                    <motion.div
                        style={{ opacity, scale, x: xLeft }}
                        className="ty-body-lg px-2 text-right text-accent-dark-hover opacity-55"
                    >
                        <TypeWriterEffect
                            speed={50}
                            text="Full-Stack Engineer"
                            start
                        />
                    </motion.div>
                    <motion.div
                        style={{ opacity, scale, x: xRight }}
                        className="ty-body-lg px-2 text-left text-accent-dark-hover opacity-55"
                    >
                        <TypeWriterEffect
                            speed={50}
                            text="React • Node.js • AWS"
                            start
                        />
                    </motion.div>
                </div>
                <div className="fixed inset-x-0 bottom-0 m-auto h-40 w-full p-15 md:w-1/2">
                    <div className="ty-body flex w-full justify-between font-semibold text-accent-dark-active [&>div]:cursor-pointer [&>div]:transition-all [&>div]:duration-300">
                        <div className="hover:text-accent-dark">About Me</div>
                        <div className="hover:text-accent-dark">Project</div>
                        <div className="hover:text-accent-dark">Contact</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greetings;

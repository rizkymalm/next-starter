import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

import TypeWriterEffect from '@/components/features/Typewriter';
import { useScramble } from '@/utils/useScramble';

const Greetings = () => {
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

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0%', '100%'],
    });

    // const y = useTransform(scrollYProgress, [0, 0.4], ['0%', '-20%']);
    const xRight = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
    const xLeft = useTransform(scrollYProgress, [0, 1], ['0%', '-200%']);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className="relative min-h-[600vh] min-w-full" ref={ref}>
            <div className="relative inset-0 z-999 m-auto h-screen w-full items-center justify-center text-center">
                <div className="fixed inset-0 m-auto grid h-50 w-125 grid-cols-2">
                    <motion.span
                        style={{ x: xLeft, scale, opacity }}
                        className="ty-super text-right font-rowdies text-accent-dark"
                    >
                        {textR.text}
                    </motion.span>
                    <motion.span
                        style={{
                            x: xRight,
                            scale,
                            opacity,
                        }}
                        className="ty-super text-left font-rowdies text-accent-dark"
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
            </div>
        </div>
    );
};

export default Greetings;

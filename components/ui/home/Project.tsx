import { useScramble } from '@/utils/useScramble';
import { useTransform, motion } from 'framer-motion';
import React from 'react';

const Project = ({ scrollYProgress }: { scrollYProgress: any }) => {
    const text = useScramble({
        text: 'RM',
        speed: 20,
        scramble: 40,
    });
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.4], ['-100%', '0%']);
    return (
        <div className="relative h-screen w-full max-w-full">
            <motion.div
                style={{ scale, opacity, y }}
                className="fixed inset-0 m-auto h-50 w-50"
            >
                <h2 className={`ty-super font-rowdies text-accent-dark`}>
                    {text.text}
                </h2>
            </motion.div>
        </div>
    );
};

export default Project;

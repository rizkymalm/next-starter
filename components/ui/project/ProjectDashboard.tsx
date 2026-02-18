import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';

import ButtonToggle from '@/components/button/ButtonToggle';
import TypeWriterEffect from '@/components/features/Typewriter';

const ProjectDashboard = () => {
    const [display, setDisplay] = useState('dark');
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0.75', 'end'],
    });
    const scale = useTransform(
        scrollYProgress,
        [0, 0.3, 0.4, 0.6, 0.8, 1],
        [0, 0.5, 1, 1, 1.5, 2]
    );
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
    const y = useTransform(
        scrollYProgress,
        [0, 0.3, 0.4, 0.6, 0.8, 1],
        ['-100%', '-50%', '0', '0', '50%', '100%']
    );
    const handleChangeButtonToggle = (e: any) => {
        e.preventDefault();
        if (display === 'dark') {
            setDisplay('light');
        } else {
            setDisplay('dark');
        }
    };
    return (
        <motion.div
            style={{ scale, opacity, y }}
            className="fixed inset-0 z-999 m-auto h-100 w-150"
        >
            <div className="glow-card inset-x-0 m-auto h-72.5 bg-dark-3 p-[6px]">
                <div className="relative z-9 size-full">
                    <div
                        className={`size-full rounded-lg bg-contain bg-center transition-all duration-300 ${display === 'dark' ? 'bg-[url("/images/projects/dashboard-dark.png")]' : 'bg-[url("/images/projects/dashboard-light.png")]'}`}
                    />
                    <div className="absolute right-11 top-0 z-99 m-auto size-10 text-accent-dark transition-all duration-300">
                        <ButtonToggle
                            onClick={handleChangeButtonToggle}
                            isChecked={display === 'dark'}
                        />
                    </div>
                </div>
            </div>
            <div className="ty-body-lg font-bold text-accent-dark">
                <TypeWriterEffect
                    text="This is an online survey platform. The name is K-OINS"
                    speed={50}
                    start
                />
            </div>
        </motion.div>
    );
};

export default ProjectDashboard;

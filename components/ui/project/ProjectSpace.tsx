import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';

import TypeWriterEffect from '@/components/features/Typewriter';
import VideoPlayer from '@/components/video/VideoPlayer';

const ProjectSpace = () => {
    const [display, setDisplay] = useState('desktop');
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0.5', '0.8'],
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
    return (
        <motion.div
            style={{ scale, opacity, y }}
            className="fixed inset-0 z-999 m-auto h-100 w-150"
        >
            <div className="glow-card inset-x-0 m-auto h-72.5 bg-dark-3 p-[6px]">
                <div
                    className={`relative z-9 flex h-full w-[1200px] gap-6 transition-transform duration-300 ${display === 'desktop' ? 'translate-x-0' : '-translate-x-[51%]'}`}
                >
                    <div className="size-full rounded-lg">
                        <VideoPlayer
                            video="/videos/3d-web-desktop.mp4"
                            size={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </div>
                    <div className="size-full rounded-lg bg-dark-1">
                        <VideoPlayer
                            video="/videos/3d-web-mobile.mp4"
                            size={{
                                width: 'auto',
                                height: '100%',
                            }}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`absolute inset-y-0 z-99 m-auto size-10 text-accent-dark transition-all duration-300 ${display === 'mobile' ? '-left-10' : 'left-0 opacity-0'}`}
            >
                <button
                    type="button"
                    onClick={() => setDisplay('desktop')}
                    aria-label="switch to desktop"
                >
                    <Icon
                        icon="radix-icons:desktop"
                        className="text-accent-dark"
                        width={34}
                        height={34}
                    />
                </button>
            </div>
            <div
                className={`absolute inset-y-0 z-99 m-auto size-10 text-accent-dark transition-all duration-300 ${display === 'desktop' ? '-right-10' : 'right-0 opacity-0'}`}
            >
                <button
                    type="button"
                    onClick={() => setDisplay('mobile')}
                    aria-label="switch to mobile"
                >
                    <Icon
                        icon="radix-icons:mobile"
                        className="text-accent-dark"
                        width={34}
                        height={34}
                    />
                </button>
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

export default ProjectSpace;

import TypeWriterEffect from '@/components/features/Typewriter';
import { useScramble } from '@/utils/useScramble';
import { useTransform, motion, useScroll } from 'framer-motion';
import ProjectKoinsDesktop from '@/public/images/projects/k-oins-desktop.jpg';
import ProjectKoinsMobile from '@/public/images/projects/k-oins-mobile.png';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import VideoPlayer from '@/components/video/VideoPlayer';

const Project2 = () => {
    const [display, setDisplay] = useState('desktop');
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0.5', 'end'],
    });
    const scale = useTransform(
        scrollYProgress,
        [0, 0.3, 0.5, 0.8, 1],
        [0, 0.5, 1, 1, 1]
    );
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.4], ['-100%', '0%']);
    return (
        <div className="relative min-h-[200vh] w-full max-w-full">
            <div className="relative z-999 m-auto h-screen w-full items-center justify-center text-center">
                <motion.div
                    style={{ scale, opacity, y }}
                    className="fixed inset-0 z-999 m-auto h-100 w-150"
                >
                    <div
                        className={`glow-card inset-x-0 m-auto h-72.5 bg-dark-3 p-[6px]`}
                    >
                        <div
                            className={`relative z-9 flex h-full w-[1200px] gap-6 transition-transform duration-300 ${display === 'desktop' ? 'translate-x-0' : '-translate-x-[51%]'}`}
                        >
                            <div className="h-full w-full rounded-lg">
                                <VideoPlayer
                                    video="/videos/3d-web-desktop.mp4"
                                    size={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </div>
                            <div className="h-full w-full rounded-lg bg-dark-1">
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
                        className={`absolute inset-y-0 z-99 m-auto h-10 w-10 text-accent-dark transition-all duration-300 ${display === 'mobile' ? '-left-10' : 'left-0 opacity-0'}`}
                    >
                        <button
                            type="button"
                            onClick={() => setDisplay('desktop')}
                        >
                            <Icon
                                icon={'radix-icons:desktop'}
                                className="text-accent-dark"
                                width={34}
                                height={34}
                            />
                        </button>
                    </div>
                    <div
                        className={`absolute inset-y-0 z-99 m-auto h-10 w-10 text-accent-dark transition-all duration-300 ${display === 'desktop' ? '-right-10' : 'right-0 opacity-0'}`}
                    >
                        <button
                            type="button"
                            onClick={() => setDisplay('mobile')}
                        >
                            <Icon
                                icon={'radix-icons:mobile'}
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
            </div>
        </div>
    );
};

export default Project2;

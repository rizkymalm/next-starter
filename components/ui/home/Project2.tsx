import TypeWriterEffect from '@/components/features/Typewriter';
import { useScramble } from '@/utils/useScramble';
import { useTransform, motion } from 'framer-motion';
import ProjectKoinsDesktop from '@/public/images/projects/k-oins-desktop.jpg';
import ProjectKoinsMobile from '@/public/images/projects/k-oins-mobile.png';
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const Project2 = ({ scrollYProgress }: { scrollYProgress: any }) => {
    const [display, setDisplay] = useState('desktop');
    const text = useScramble({
        text: 'RM',
        speed: 20,
        scramble: 40,
    });
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.4], ['-100%', '0%']);
    return (
        <div className="relative min-h-screen w-full max-w-full">
            <div className="relative z-999 m-auto h-screen w-full items-center justify-center text-center">
                <motion.div
                    style={{ scale, opacity, y }}
                    className="fixed inset-0 z-999 m-auto h-100 w-150"
                >
                    <div
                        className={`glow-card inset-x-0 m-auto min-h-72.5 bg-dark-3 p-[6px]`}
                    >
                        <div
                            className={`relative z-9 flex h-full w-full transition-transform duration-300 ${display === 'desktop' ? 'translate-x-0' : '-translate-x-[101%]'}`}
                        >
                            <Image
                                src={ProjectKoinsDesktop}
                                alt="K-oins Rizki Malem"
                                className="rounded-lg"
                            />
                            <Image
                                src={ProjectKoinsMobile}
                                alt="K-oins Rizki Malem"
                                className="rounded-lg"
                            />
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

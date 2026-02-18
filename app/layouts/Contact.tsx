import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import { ButtonPrimary } from '@/components/button';
import Floating from '@/components/features/Floating';
import InstructionExplore from '@/components/ui/contact/InstructionExplore';
import RocketImage from '@/public/images/rocket.png';

const Contact = () => {
    const [explore, setExplore] = useState(false);
    const [instruction, setInstruction] = useState(false);
    const [engineOn, setEngineOn] = useState(false);
    const [rocketLaunch, setRocketLaunch] = useState(false);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0.8', 'end'],
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const openNewTab = (url: string) => {
        window.open(url, '_blank');
    };
    const handleStartEngine = () => {
        setEngineOn(true);
    };
    useEffect(() => {
        if (!explore) return undefined;
        const interval = setTimeout(() => {
            setInstruction(true);
        }, 6000);
        return () => clearTimeout(interval);
    }, [explore]);

    const [display, setDisplay] = useState(5);

    // countdown rocket lauch
    useEffect(() => {
        let timer: ReturnType<typeof setInterval> | undefined;

        if (engineOn && display > 0) {
            timer = setInterval(() => {
                setDisplay(prev => prev - 1);
            }, 2000);
        }

        // Always returns a function, satisfying the 'Destructor' type
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [display, engineOn]);

    useEffect(() => {
        if (engineOn && display === 0) {
            setRocketLaunch(true);
            setTimeout(() => {
                window.location.href = 'https://rizkymalm.space/explore';
            }, 500);
        }
    }, [engineOn, display]);

    return (
        <div
            className={`relative z-999 h-[200vh] w-full max-w-full overflow-hidden ${engineOn ? 'camera-shake' : ''}`}
        >
            <div className="absolute inset-x-0 bottom-0 z-99 m-auto h-45 w-full items-center justify-center bg-moon-bg bg-cover bg-top bg-no-repeat px-4 lg:w-203" />
            {instruction && !engineOn && (
                <InstructionExplore onStartEngine={handleStartEngine} />
            )}
            {engineOn && (
                <div
                    className={`launch-glow ${rocketLaunch ? 'moon-drop' : ''}`}
                />
            )}
            {engineOn && <div className="launch-flash" />}
            {engineOn && (
                <div className="w-120 absolute inset-x-0 bottom-80 m-auto text-center">
                    <h1 className="ty-super-xl animate-countDown text-accent-dark opacity-55">
                        {display}
                    </h1>
                </div>
            )}
            <div className="absolute inset-x-0 bottom-0 z-0 m-auto h-screen w-full overflow-hidden">
                <div
                    className={`absolute inset-x-0 bottom-0 z-9 m-auto items-center justify-center transition-all duration-[5000ms] ${explore ? '-translate-y-35' : 'translate-y-50'}`}
                >
                    <Image
                        src={RocketImage}
                        alt="Moon background | Rizki Malem"
                        className={`m-auto w-30 lg:w-[13%] xl:w-[13%] ${rocketLaunch ? 'rocket-launch' : ''}`}
                    />
                </div>
            </div>
            <div
                className={`fixed inset-0 z-99 m-auto flex h-20 w-4/5 gap-10 transition-all duration-1000 lg:w-1/2 ${explore ? 'opacity-0' : 'opacity-100'}`}
            >
                <motion.div
                    className="m-auto h-10 w-20 translate-y-full"
                    style={{
                        opacity,
                        scale: useTransform(
                            scrollYProgress,
                            [0, 0.25, 0.5, 0.75, 1],
                            [0, 1, 1, 1, 1]
                        ),
                        y: useTransform(
                            scrollYProgress,
                            [0, 0.25, 0.5, 0.75, 1],
                            ['400%', '0%', '0%', '0%', '0%']
                        ),
                    }}
                >
                    <Floating>
                        <ButtonPrimary
                            text="github"
                            icon="ri:github-fill"
                            iconSize={24}
                            type="button"
                            size="md"
                            variant="outline"
                            onClick={() =>
                                openNewTab('https://github.com/rizkymalm')
                            }
                        />
                    </Floating>
                </motion.div>
                <motion.div
                    className="m-auto h-10 w-20"
                    style={{
                        opacity,
                        scale: useTransform(
                            scrollYProgress,
                            [0, 0.25, 0.5, 0.75, 1],
                            [0, 0, 1, 1, 1]
                        ),
                        y: useTransform(
                            scrollYProgress,
                            [0, 0.25, 0.5, 0.75, 1],
                            ['400%', '400%', '0%', '0%', '0%']
                        ),
                    }}
                >
                    <Floating>
                        <ButtonPrimary
                            text="linkedin"
                            icon="mdi:linkedin"
                            iconSize={24}
                            type="button"
                            size="md"
                            variant="outline"
                            onClick={() =>
                                openNewTab(
                                    'https://linkedin.com/in/rizky-malem'
                                )
                            }
                        />
                    </Floating>
                </motion.div>
                <motion.div
                    className="m-auto h-10 w-20"
                    style={{
                        opacity,
                        scale: useTransform(
                            scrollYProgress,
                            [0, 0.25, 0.5, 0.75, 1],
                            [0, 0, 0, 1, 1]
                        ),
                        y: useTransform(
                            scrollYProgress,
                            [0, 0.25, 0.5, 0.75, 1],
                            ['400%', '400%', '400%', '0%', '0%']
                        ),
                    }}
                >
                    <Floating>
                        <ButtonPrimary
                            text="instagram"
                            icon="f7:logo-instagram"
                            iconSize={24}
                            type="button"
                            size="md"
                            variant="outline"
                            onClick={() =>
                                openNewTab(
                                    'https://www.instagram.com/rizkymalm/'
                                )
                            }
                        />
                    </Floating>
                </motion.div>
                <motion.div
                    className="m-auto h-10 w-44"
                    style={{
                        opacity,
                        scale: useTransform(
                            scrollYProgress,
                            [0, 0.25, 0.5, 0.75, 1],
                            [0, 0, 0, 0, 1]
                        ),
                        y: useTransform(
                            scrollYProgress,
                            [0, 0.25, 0.5, 0.75, 1],
                            ['400%', '400%', '400%', '400%', '0%']
                        ),
                    }}
                >
                    <Floating>
                        <ButtonPrimary
                            text="RM Universe"
                            icon="mingcute:rocket-fill"
                            iconSize={24}
                            type="button"
                            size="md"
                            variant="outline"
                            onClick={() => setExplore(true)}
                        />
                    </Floating>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

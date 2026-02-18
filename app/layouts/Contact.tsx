import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

import { ButtonPrimary } from '@/components/button';
import Floating from '@/components/features/Floating';

const Contact = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0.8', 'end'],
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const openNewTab = (url: string) => {
        window.open(url, '_blank');
    };
    return (
        <div className="relative z-999 h-[200vh] w-full max-w-full">
            <div className="absolute inset-x-0 bottom-0 z-99 m-auto h-45 w-full items-center justify-center bg-moon-bg bg-cover bg-top bg-no-repeat px-4 lg:w-203" />
            <div className="fixed inset-0 z-99 m-auto flex h-20 w-4/5 gap-10 lg:w-1/2">
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
                        />
                    </Floating>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

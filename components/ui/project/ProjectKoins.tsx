import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';

import DialogContent from '@/components/dialogs/DialogContent';
import DialogSlideUp from '@/components/dialogs/DialogSlideUp';
import DialogTitle from '@/components/dialogs/DialogTitle';

const ProjectKoins = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [display, setDisplay] = useState('desktop');
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0%', '100%'],
    });
    const scale = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 0.8, 1],
        [0, 1, 1, 1, 0]
    );
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        [0, 1, 1, 1, 1, 0]
    );
    const y = useTransform(
        scrollYProgress,
        [0, 0.15, 0.3, 0.5, 0.8, 1],
        ['0%', '50%', '0%', '0%', '0%', '-80%']
    );
    return (
        <div
            className="relative z-999 m-auto h-[600vh] w-full items-center justify-center"
            ref={ref}
        >
            <motion.div
                style={{ scale, opacity, y }}
                className="fixed inset-0 z-999 m-auto flex h-60 w-4/5 flex-col md:w-1/2 lg:h-[70vh]"
            >
                <DialogSlideUp
                    open={openDialog}
                    onClose={() => setOpenDialog(false)}
                    animation="slide-up"
                    width="full"
                >
                    <DialogTitle>K-OINS — Online Survey Platform</DialogTitle>
                    <DialogContent>
                        <div className="ty-body custom-scrollbar max-h-72.5 w-full overflow-y-auto">
                            <b>K-OINS</b> is a digital survey platform that
                            connects businesses with real user insights. Users
                            participate in surveys and earn rewards, while
                            companies receive accurate, actionable data to
                            support smarter decision-making.
                            <p>The platform is designed to ensure:</p>
                            <ul className="list-inside list-disc">
                                <li>
                                    High user engagement through a point-based
                                    reward system
                                </li>
                                <li>
                                    Reliable data from verified participants
                                </li>
                                <li>
                                    Fast and intuitive survey creation and
                                    distribution
                                </li>
                            </ul>
                            <h5 className="ty-h5 font-bold text-accent-dark">
                                Technology Stack
                            </h5>
                            <p>
                                K-OINS is built with a modern, scalable, and
                                performance-oriented architecture:
                            </p>
                            <b className="ty-body-lg font-bold">FRONTEND</b>
                            <p>
                                Built using <b>Flutter</b>, allowing K-OINS to
                                run on both Android and iOS from a single
                                codebase. This ensures a consistent UI, smooth
                                animations, and fast development cycles across
                                platforms.
                            </p>
                        </div>
                    </DialogContent>
                </DialogSlideUp>
                <div className="glow-card inset-x-0 m-auto size-full">
                    <div
                        className={`relative z-9 flex h-full w-[200%] gap-4 p-2 transition-transform duration-300 ${display === 'desktop' ? 'translate-x-0' : '-translate-x-1/2'}`}
                    >
                        <div
                            className="size-full rounded-md bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url('/images/projects/k-oins-desktop.jpg')`,
                            }}
                        />
                        <div
                            className="size-full rounded-md bg-contain bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url('/images/projects/k-oins-mobile.jpg')`,
                            }}
                        />
                    </div>
                </div>
                <div className="ty-body flex text-accent-dark">
                    <button
                        type="button"
                        onClick={() => setOpenDialog(true)}
                        className="m-auto flex p-4 align-middle"
                    >
                        Detail
                        <Icon
                            icon="iconoir:fast-arrow-up"
                            width={18}
                            height={18}
                            className="animate-button"
                        />
                    </button>
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
            </motion.div>
        </div>
    );
};

export default ProjectKoins;

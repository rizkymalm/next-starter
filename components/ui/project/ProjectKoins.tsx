import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import DialogContent from '@/components/dialogs/DialogContent';
import DialogSlideUp from '@/components/dialogs/DialogSlideUp';
import DialogTitle from '@/components/dialogs/DialogTitle';
import ProjectKoinsDesktop from '@/public/images/projects/k-oins-desktop.jpg';
import ProjectKoinsMobile from '@/public/images/projects/k-oins-mobile.png';

const ProjectKoins = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [display, setDisplay] = useState('desktop');
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0.20', '0.4'],
    });
    const scale = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 0.8, 1],
        [0, 0.8, 1, 1.8, 2]
    );
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        [0, 0.5, 1, 1, 0.5, 0]
    );
    const y = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 0.8, 1],
        ['-100%', '-10%', '0%', '80%', '100%']
    );
    return (
        <motion.div
            style={{ scale, opacity, y }}
            className="fixed inset-0 z-999 m-auto h-100 w-150"
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
                        <b>K-OINS</b> is a digital survey platform that connects
                        businesses with real user insights. Users participate in
                        surveys and earn rewards, while companies receive
                        accurate, actionable data to support smarter
                        decision-making.
                        <p>The platform is designed to ensure:</p>
                        <ul className="list-inside list-disc">
                            <li>
                                High user engagement through a point-based
                                reward system
                            </li>
                            <li>Reliable data from verified participants</li>
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
                            Built using <b>Flutter</b>, allowing K-OINS to run
                            on both Android and iOS from a single codebase. This
                            ensures a consistent UI, smooth animations, and fast
                            development cycles across platforms.
                        </p>
                    </div>
                </DialogContent>
            </DialogSlideUp>
            <div className="glow-card inset-x-0 m-auto min-h-72.5 bg-dark-3 p-[6px]">
                <div
                    className={`relative z-9 flex size-full transition-transform duration-300 ${display === 'desktop' ? 'translate-x-0' : '-translate-x-[101%]'}`}
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
        </motion.div>
    );
};

export default ProjectKoins;

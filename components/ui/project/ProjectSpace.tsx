import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';

import DialogContent from '@/components/dialogs/DialogContent';
import DialogSlideUp from '@/components/dialogs/DialogSlideUp';
import DialogTitle from '@/components/dialogs/DialogTitle';
import VideoPlayer from '@/components/video/VideoPlayer';

const ProjectSpace = () => {
    const [openDialog, setOpenDialog] = useState(false);
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
            <DialogSlideUp
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                animation="slide-up"
                width="full"
            >
                <DialogTitle>
                    RM Universe — Solar System Exploration
                </DialogTitle>
                <DialogContent>
                    <div className="ty-body custom-scrollbar max-h-72.5 w-full overflow-y-auto">
                        <p>
                            <b>RM Universe</b> is an interactive 3D experience
                            that presents projects as planets inside a living
                            solar system.
                        </p>
                        <p>
                            Instead of scrolling through a traditional website,
                            visitors explore a digital universe where each
                            orbiting planet represents a real product, idea, or
                            experiment.
                        </p>
                        <p>
                            This project transforms a personal portfolio into a
                            <b>navigable experience</b> — blending storytelling,
                            motion, and technology into a single immersive
                            interface.
                        </p>
                        <b>Users can:</b>
                        <ul className="list-inside list-disc">
                            <li>
                                Rotate and explore the solar system in real time
                            </li>
                            <li>
                                Select planets to reveal detailed project
                                information
                            </li>
                            <li>
                                Experience smooth cinematic transitions between
                                sections
                            </li>
                        </ul>
                        <b className="ty-body-lg">
                            Technology & Implementation
                        </b>
                        <p>
                            This project is built using modern web graphics and
                            interaction technologies:
                        </p>
                        <ul className="list-inside list-disc">
                            <li>
                                <b>Three.js</b> for real-time 3D rendering and
                                orbital animation
                            </li>
                            <li>
                                <b>React / Next.js</b> for UI, routing, and
                                component architecture
                            </li>
                            <li>
                                <b>Framer Motion</b> for smooth transitions and
                                micro-interactions
                            </li>
                            <li>
                                <b>Custom shaders & particle systems</b> to
                                create a deep-space atmosphere
                            </li>
                        </ul>
                        <p>
                            <b>RM Universe</b> demonstrates the ability to
                            combine:
                        </p>
                        <ul className="list-inside list-disc">
                            <li>Frontend engineering</li>
                            <li>Real-time 3D graphics</li>
                            <li>UX storytelling</li>
                        </ul>
                        <p>
                            It showcases not only technical skill, but also the
                            ability to design memorable digital products.
                        </p>
                    </div>
                </DialogContent>
            </DialogSlideUp>
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

export default ProjectSpace;

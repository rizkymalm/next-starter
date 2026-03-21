import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';

import ButtonToggle from '@/components/button/ButtonToggle';
import DialogContent from '@/components/dialogs/DialogContent';
import DialogSlideUp from '@/components/dialogs/DialogSlideUp';
import DialogTitle from '@/components/dialogs/DialogTitle';

const ProjectDashboard = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [display, setDisplay] = useState('dark');
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
    const handleChangeButtonToggle = (e: any) => {
        e.preventDefault();
        if (display === 'dark') {
            setDisplay('light');
        } else {
            setDisplay('dark');
        }
    };
    return (
        <div
            className="relative z-999 m-auto h-[600vh] w-full items-center justify-center"
            ref={ref}
        >
            <motion.div
                style={{ scale, opacity, y }}
                className="fixed inset-0 z-999 m-auto flex h-52 w-4/5 flex-col md:w-1/2 lg:h-[70vh]"
            >
                <DialogSlideUp
                    open={openDialog}
                    onClose={() => setOpenDialog(false)}
                    animation="slide-up"
                    width="full"
                >
                    <DialogTitle>
                        Digimal — Analytics & Business Dashboard
                    </DialogTitle>
                    <DialogContent>
                        <div className="ty-body custom-scrollbar max-h-72.5 w-full overflow-y-auto">
                            <p>
                                <b>Digimal</b> is a modern web-based analytics
                                dashboard designed to provide a clear, real-time
                                overview of business performance.
                            </p>
                            <p>
                                It brings together revenue, user activity,
                                transactions, and growth metrics into a single,
                                intuitive interface that helps teams make faster
                                and smarter decisions.
                            </p>
                            <p>
                                The dashboard is built with a strong focus on:
                            </p>
                            <ul className="list-inside list-disc">
                                <li>Data clarity and visual hierarchy</li>
                                <li>
                                    Fast navigation and responsive interaction
                                </li>
                                <li>
                                    Dark-mode optimized UI for long working
                                    sessions
                                </li>
                            </ul>
                            <b className="ty-body-lg">Design Philosophy</b>
                            <p>
                                The interface uses a <b>futuristic theme</b>{' '}
                                with subtle neon accents, creating a high-tech
                                atmosphere while maintaining excellent
                                readability.
                            </p>
                            <p>
                                Micro-interactions and smooth transitions make
                                the experience feel responsive and alive, rather
                                than static.
                            </p>
                            <b className="ty-body-lg">
                                Technology & Architecture
                            </b>
                            <p>Modern frontend stack:</p>
                            <ul className="list-inside list-disc">
                                <li>
                                    <b>React / Next.js</b> for scalable UI
                                    architecture
                                </li>
                                <li>
                                    <b>
                                        Chart libraries & custom data
                                        visualization
                                    </b>{' '}
                                    for real-time insights
                                </li>
                                <li>
                                    <b>Component-based design system</b> for
                                    consistency and reusability
                                </li>
                                <li>
                                    <b>Optimized state management</b> for
                                    high-performance data updates
                                </li>
                            </ul>
                        </div>
                    </DialogContent>
                </DialogSlideUp>
                <div className="glow-card inset-x-0 m-auto size-full p-2">
                    <div className="relative z-9 size-full">
                        <div
                            className="size-full rounded-lg bg-cover bg-left bg-no-repeat transition-all duration-300"
                            style={{
                                backgroundImage:
                                    display === 'dark'
                                        ? 'url("/images/projects/dashboard-dark.png")'
                                        : 'url("/images/projects/dashboard-light.png")',
                            }}
                        />
                        <div className="absolute right-11 top-0 z-99 m-auto size-10 text-accent-dark transition-all duration-300">
                            <ButtonToggle
                                onClick={handleChangeButtonToggle}
                                isChecked={display === 'dark'}
                            />
                        </div>
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
            </motion.div>
        </div>
    );
};

export default ProjectDashboard;

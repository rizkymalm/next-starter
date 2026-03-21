'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Greetings from '@/app/layouts/Greetings';
import { SpotlightParticles } from '@/components/features';
import { postVisitors } from '@/redux/actions/visitors';

import Contact from './layouts/Contact';
import Project from './layouts/Project';

export default function Home() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0%', '100%'],
    });
    const left = useTransform(
        scrollYProgress,
        [0, 0.2, 0.25, 0.8, 0.85, 1],
        ['0%', '10%', '35%', '50%', '70%', '85%']
    );
    const [createVisitor, setCreateVisitor] = useState(false);
    useEffect(() => {
        async function postDataVisitors() {
            if (!createVisitor) {
                await postVisitors({
                    data: {
                        url: 'https://wrizkymalm.com',
                        page: 'home',
                    },
                    callback: () => {
                        setCreateVisitor(true);
                    },
                });
            }
        }
        postDataVisitors();
    }, [createVisitor]);
    const handleScrollTo = (value: number) => {
        if (ref.current) {
            document.documentElement.scrollTo({
                top: (value * ref.current.clientHeight) / 100,
                behavior: 'smooth',
            });
        }
    };
    return (
        <main
            className="relative min-h-screen w-full overflow-x-hidden bg-bg-light-1 dark:bg-bg-dark-1"
            ref={ref}
        >
            <SpotlightParticles />
            {/* //section 1 */}
            <Greetings />
            <Project />
            <Contact />
            <div className="fixed inset-x-0 bottom-0 z-999 m-auto h-20 w-full px-10 py-15 md:w-1/2 lg:px-15">
                <div className="ty-body relative z-9 flex w-full justify-between font-semibold text-accent-dark-active [&>button]:transition-all [&>button]:duration-300">
                    <button
                        className="hover:text-accent-dark"
                        onClick={() => handleScrollTo(0)}
                        type="button"
                    >
                        About Me
                    </button>
                    <button
                        className="hover:text-accent-dark"
                        onClick={() => handleScrollTo(30)}
                        type="button"
                    >
                        Project
                    </button>
                    <button
                        className="hover:text-accent-dark"
                        onClick={() => handleScrollTo(100)}
                        type="button"
                    >
                        Contact
                    </button>
                </div>
                <motion.div
                    className="menu-direction translate-x-8 lg:translate-x-15"
                    style={{ left }}
                />
            </div>
        </main>
    );
}

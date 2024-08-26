'use client';

import React from 'react';
import ButtonToggle from '@/components/button/ButtonToggle';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const menuBar = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Projects',
        link: '/projects',
    },
];

const ProjectPage = () => {
    const { setTheme } = useTheme();
    const [isChecked, setIsChecked] = useState(true);

    useEffect(() => {
        isChecked ? setTheme('dark') : setTheme('light');
    }, [isChecked, setTheme]);

    const handleChangeButtonToggle = (e: any) => {
        e.preventDefault();
        setIsChecked(!isChecked);
    };
    const pageTransition: Variants = {
        in: {
            transform: 'scale(1)',
        },
        out: {
            transform: 'scale(0)',
        },
    };
    return (
        <div>
            <div className="fixed right-0 top-5 z-99 my-auto h-[100px] w-[90px]">
                <ButtonToggle
                    onClick={handleChangeButtonToggle}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                />
            </div>
            <div className="fixed bottom-0 right-0 top-0 z-99 my-auto table w-[50px]">
                <ul className="[&>li]:cursor-pointer [&>li]:py-1">
                    {menuBar.map(data => (
                        <li key={data.name}>
                            <Link href={data.link}>
                                <div className="h-[10px] w-[10px] rounded-md border border-yellow-600 hover:bg-yellow-600"></div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <motion.div
                exit="out"
                animate="in"
                initial="out"
                variants={pageTransition}
            >
                <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-20">
                    Project
                </main>
            </motion.div>
        </div>
    );
};

export default ProjectPage;

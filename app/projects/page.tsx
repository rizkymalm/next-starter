'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import ButtonThemeSwitch from '@/components/button/ButtonThemeSwitch';
import SidebarMenu from '@/components/layout/SidebarMenu';


const ProjectPage = () => {
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
                <ButtonThemeSwitch />
            </div>
            <div className="fixed bottom-0 right-0 top-0 z-99 my-auto table w-[100px]">
                <SidebarMenu />
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

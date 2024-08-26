'use client';

import { motion, Variants } from 'framer-motion';
import ButtonThemeSwitch from '@/components/button/ButtonThemeSwitch';
import SidebarMenu from '@/components/layout/SidebarMenu';

export default function Home() {
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
                    <div className="relative z-10 w-full max-w-5xl items-center justify-between py-15 font-mono text-sm lg:flex lg:py-0">
                        {/* <div className="triangle absolute left-0 right-0 top-0 m-auto w-[50%] bg-black dark:bg-blue-900">
                    <div className="absolute"></div>
                </div> */}
                        <div className="relative left-0 top-0 m-auto flex h-75 w-[80%] rounded-lg border-4 border-black bg-black dark:border-black dark:bg-transparent lg:h-180 lg:w-[50%]">
                            <div className="profile-photo absolute bottom-[-20px] right-[-20px] h-full w-full rounded-lg border-4 border-black bg-white dark:border-black dark:bg-black"></div>
                        </div>
                        <div className="w-full px-10 py-10 lg:w-[50%] lg:py-1">
                            <div className="text-title-md font-bold lg:text-title-xl">
                                Hello, I am <br />
                                <b className="text-yellow-600">RIZKI MALEM</b>
                            </div>
                            <div className="text-text-xxl">
                                Frontend Developer
                            </div>
                        </div>
                    </div>
                </main>
            </motion.div>
        </div>
    );
}

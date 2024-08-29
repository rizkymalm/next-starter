import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import ProjectKoins from '@/public/images/projects/koins-desktop.png';

const ProjectListDesktop = () => {
    const pageTransition: Variants = {
        in: {
            transform: 'scale(1)',
        },
        out: {
            transform: 'scale(0)',
        },
    };
    return (
        <div className="m-auto grid w-full grid-cols-1 lg:grid-cols-3">
            <div className="group">
                <motion.div
                    exit="out"
                    animate="in"
                    initial="out"
                    variants={pageTransition}
                    transition={{ delay: 0.3 }}
                >
                    <div className="absolute inset-0 z-99 m-auto bg-black-2/50 opacity-0 group-hover:opacity-100">
                        <table className="h-full w-full">
                            <tbody>
                                <tr>
                                    <td align="center">
                                        <p className="text-text-lg font-bold">
                                            Online Survey
                                        </p>
                                        <button className="border border-blue-900/50 bg-blue-900 px-5 py-2 text-text-sm hover:bg-blue-900/50">
                                            View Detail
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="m-auto min-h-20 w-full rounded-sm p-2 transition-all">
                        <div
                            className={`bg-desktop-koins min-h-10 w-full bg-cover bg-center bg-no-repeat`}
                        >
                            <Image
                                src={ProjectKoins}
                                alt="rizky project"
                                className="m-auto w-full opacity-0"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="group">
                <motion.div
                    exit="out"
                    animate="in"
                    initial="out"
                    variants={pageTransition}
                    transition={{ delay: 0.6 }}
                >
                    <div className="absolute inset-0 z-99 m-auto bg-black-2/50 opacity-0 group-hover:opacity-100">
                        <table className="h-full w-full">
                            <tbody>
                                <tr>
                                    <td align="center">
                                        <p className="text-text-lg font-bold">
                                            Company Profile
                                        </p>
                                        <button className="border border-blue-900/50 bg-blue-900 px-5 py-2 text-text-sm hover:bg-blue-900/50">
                                            View Detail
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="m-auto min-h-20 w-full rounded-sm p-2 transition-all">
                        <div
                            className={`bg-desktop-centrin min-h-10 w-full bg-cover bg-center bg-no-repeat`}
                        >
                            <Image
                                src={ProjectKoins}
                                alt="rizky project"
                                className="m-auto w-full opacity-0"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="group">
                <motion.div
                    exit="out"
                    animate="in"
                    initial="out"
                    variants={pageTransition}
                    transition={{ delay: 1 }}
                >
                    <div className="absolute inset-0 z-99 m-auto bg-black-2/50 opacity-0 group-hover:opacity-100">
                        <table className="h-full w-full">
                            <tbody>
                                <tr>
                                    <td align="center">
                                        <p className="text-text-lg font-bold">
                                            Survey Design
                                        </p>
                                        <button className="border border-blue-900/50 bg-blue-900 px-5 py-2 text-text-sm hover:bg-blue-900/50">
                                            View Detail
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="m-auto min-h-20 w-full rounded-sm p-2 transition-all">
                        <div
                            className={`bg-desktop-surveydesign min-h-10 w-full bg-cover bg-center bg-no-repeat`}
                        >
                            <Image
                                src={ProjectKoins}
                                alt="rizky project"
                                className="m-auto w-full opacity-0"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="group">
                <motion.div
                    exit="out"
                    animate="in"
                    initial="out"
                    variants={pageTransition}
                    transition={{ delay: 1 }}
                >
                    <div className="absolute inset-0 z-99 m-auto bg-black-2/50 opacity-0 group-hover:opacity-100">
                        <table className="h-full w-full">
                            <tbody>
                                <tr>
                                    <td align="center">
                                        <p className="text-text-lg font-bold">
                                            Dashboard Monitoring
                                        </p>
                                        <button className="border border-blue-900/50 bg-blue-900 px-5 py-2 text-text-sm hover:bg-blue-900/50">
                                            View Detail
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="m-auto min-h-20 w-full rounded-sm p-2 transition-all">
                        <div
                            className={`bg-desktop-dashboard min-h-10 w-full bg-cover bg-center bg-no-repeat`}
                        >
                            <Image
                                src={ProjectKoins}
                                alt="rizky project"
                                className="m-auto w-full opacity-0"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectListDesktop;

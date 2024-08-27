import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import ProjectKepo from '@/public/images/projects/kepo.png';

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
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
                <motion.div
                    exit="out"
                    animate="in"
                    initial="out"
                    variants={pageTransition}
                    transition={{ delay: 0.3 }}
                >
                    <div className="m-auto min-h-20 w-[70%] rounded-sm p-5 pb-0 shadow-5 transition-all hover:w-[75%]">
                        <p className="mb-10 text-text-lg">K-OINS</p>
                        <div
                            className={`bg-project-koins min-h-10 w-full bg-contain bg-center bg-no-repeat`}
                        >
                            <Image
                                src={ProjectKepo}
                                alt="rizky project"
                                className="m-auto w-[80%] opacity-0"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div>
                <motion.div
                    exit="out"
                    animate="in"
                    initial="out"
                    variants={pageTransition}
                    transition={{ delay: 0.6 }}
                >
                    <div className="m-auto min-h-20 w-[70%] rounded-sm p-5 pb-0 shadow-5 transition-all hover:w-[75%]">
                        <p className="mb-10 text-text-lg">K-EPO</p>
                        <div
                            className={`bg-project-kepo min-h-10 w-full bg-contain bg-center bg-no-repeat`}
                        >
                            <Image
                                src={ProjectKepo}
                                alt="rizky project"
                                className="m-auto w-[80%] opacity-0"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectListDesktop;

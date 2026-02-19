import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const Menu = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0%', '100%'],
    });
    const left = useTransform(
        scrollYProgress,
        [0, 0.8, 1],
        ['0%', '60%', '100%']
    );
    return (
        <div className="fixed inset-x-0 bottom-0 z-999 m-auto h-20 w-full p-15 md:w-1/2">
            <div className="ty-body relative z-9 flex w-full justify-between font-semibold text-accent-dark-active [&>div]:cursor-pointer [&>div]:transition-all [&>div]:duration-300">
                <div className="hover:text-accent-dark">About Me</div>
                <div className="hover:text-accent-dark">
                    Project{process.env.API_BASE_URL}
                </div>
                <div className="hover:text-accent-dark">Contact</div>
            </div>
            <motion.div
                className="menu-direction translate-x-15"
                style={{ left }}
            />
        </div>
    );
};

export default Menu;

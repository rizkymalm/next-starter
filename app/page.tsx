'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import ButtonThemeSwitch from '@/components/button/ButtonThemeSwitch';
import SidebarMenu from '@/components/layout/SidebarMenu';
import { SpotlightParticles } from '@/components/features';
import { useScramble } from '@/utils/useScramble';
import { useRef } from 'react';
import Greetings from '@/components/ui/home/Greetings';
import Project from '@/components/ui/home/Project';

export default function Home() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });

    const text = useScramble({
        text: 'RM',
        speed: 20,
        scramble: 40,
    });
    return (
        <main className="relative min-h-screen max-w-full overflow-x-hidden bg-bg-light-1 transition-colors duration-300 dark:bg-bg-dark-1">
            <SpotlightParticles />
            {/* //section 1 */}
            <Greetings scrollYProgress={scrollYProgress} />
            {/* section 2 */}
            <Project scrollYProgress={scrollYProgress} />
        </main>
    );
}

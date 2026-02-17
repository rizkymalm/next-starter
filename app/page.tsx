'use client';

import { useScroll } from 'framer-motion';
import { SpotlightParticles } from '@/components/features';
import { useRef } from 'react';
import Greetings from '@/components/ui/home/Greetings';
import Project from '@/components/ui/home/Project';
import Project2 from '@/components/ui/home/Project2';

export default function Home() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });
    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-bg-light-1 dark:bg-bg-dark-1">
            <SpotlightParticles />
            {/* //section 1 */}
            <Greetings />
            {/* section 2 */}
            <Project />
            {/* section 3 */}
            <Project2  />
        </main>
    );
}

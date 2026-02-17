'use client';

import { useScroll } from 'framer-motion';
import { SpotlightParticles } from '@/components/features';
import { useRef } from 'react';
import Greetings from '@/components/ui/home/Greetings';
import Project from '@/components/ui/home/Project';

export default function Home() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });
    return (
        <main className="relative h-[300vh] w-full overflow-x-hidden bg-bg-light-1 dark:bg-bg-dark-1">
            <SpotlightParticles />
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* //section 1 */}
                <Greetings scrollYProgress={scrollYProgress} />
                {/* section 2 */}
                <Project scrollYProgress={scrollYProgress} />
            </div>
        </main>
    );
}

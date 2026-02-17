'use client';

import { SpotlightParticles } from '@/components/features';
import Greetings from '@/components/ui/home/Greetings';
import Project from '@/components/ui/home/Project';
import Project2 from '@/components/ui/home/Project2';

export default function Home() {
    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-bg-light-1 dark:bg-bg-dark-1">
            <SpotlightParticles />
            {/* //section 1 */}
            <Greetings />
            {/* section 2 */}
            <Project />
            {/* section 3 */}
            <Project2 />
        </main>
    );
}

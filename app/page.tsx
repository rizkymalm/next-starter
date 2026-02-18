'use client';

import Greetings from '@/app/layouts/Greetings';
import { SpotlightParticles } from '@/components/features';
import Menu from '@/components/ui/Menu';

import Contact from './layouts/Contact';
import Project from './layouts/Project';

export default function Home() {
    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-bg-light-1 dark:bg-bg-dark-1">
            <SpotlightParticles />
            {/* //section 1 */}
            <Greetings />
            <Project />
            <Contact />
            <Menu />
        </main>
    );
}

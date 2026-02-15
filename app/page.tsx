'use client';

import { motion, Variants } from 'framer-motion';
import ButtonThemeSwitch from '@/components/button/ButtonThemeSwitch';
import SidebarMenu from '@/components/layout/SidebarMenu';
import { SpotlightParticles } from '@/components/features';
import { useScramble } from '@/utils/useScramble';
import TypeWriterEffect from '@/components/features/Typewriter';

export default function Home() {
    const pageTransition: Variants = {
        in: {
            transform: 'scale(1)',
        },
        out: {
            transform: 'scale(0)',
        },
    };
    const text = useScramble({
        text: 'RM',
        speed: 20,
        scramble: 40,
    });
    return (
        <main className="bg-bg-light-1 dark:bg-bg-dark-1 relative flex min-h-screen max-w-full overflow-hidden transition-colors duration-300">
            <SpotlightParticles />
            <div className="relative min-h-screen min-w-full">
                <div className="relative inset-0 z-999 m-auto flex h-screen w-150 flex-col items-center justify-center text-center">
                    <h2 className={`ty-super font-rowdies text-accent-dark`}>
                        {text.text}
                    </h2>
                    <p className="ty-body-lg text-accent-dark-hover opacity-55">
                        <TypeWriterEffect
                            speed={50}
                            text="Full-Stack Engineer | React • Node.js • AWS"
                            start
                        />
                    </p>
                </div>
            </div>
        </main>
    );
}

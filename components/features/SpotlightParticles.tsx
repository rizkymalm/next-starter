'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
}

const SpotlightParticles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const mouseXRef = useRef(window.innerWidth / 2);
    const mouseYRef = useRef(window.innerHeight / 2);

    useEffect(() => {
        /** CANVAS + PARTICLES SETUP * */
        const canvas = canvasRef.current;
        if (!canvas) return () => {};

        const ctx = canvas.getContext('2d')!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Particle[] = [];

        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: 1 + Math.random() * 2,
                alpha: 0.3 + Math.random() * 0.7,
            });
        }

        const handleMove = (e: MouseEvent) => {
            mouseXRef.current = e.clientX;
            mouseYRef.current = e.clientY;
        };
        window.addEventListener('mousemove', handleMove);

        /** UPDATE SPOTLIGHT BACKGROUND * */
        const updateSpotlight = () => {
            if (spotlightRef.current) {
                spotlightRef.current.style.background = `
                    radial-gradient(
                        10px circle at ${mouseXRef.current}px ${mouseYRef.current}px,
                        rgba(74, 222, 128, 0.45),
                        transparent 50%
                    )
                `;
            }
        };

        /** CURSOR FOLLOWER INERTIA * */
        const cursorDot = cursorDotRef.current;
        let dotX = mouseXRef.current;
        let dotY = mouseYRef.current;
        const speed = 0.14; // lower = slower

        const updateCursorDot = () => {
            if (!cursorDot) return;

            dotX += (mouseXRef.current - dotX) * speed;
            dotY += (mouseYRef.current - dotY) * speed;

            cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
        };

        /** MAIN DRAW LOOP * */
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                const dx = mouseXRef.current - p.x;
                const dy = mouseYRef.current - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 250) {
                    p.x -= dx * 0.005;
                    p.y -= dy * 0.005;
                    p.alpha = 1;
                } else {
                    p.alpha *= 0.98;
                    if (p.alpha < 0.3) p.alpha = 0.3;
                }

                ctx.beginPath();
                ctx.fillStyle = `rgba(74, 222, 128, ${p.alpha})`;
                ctx.shadowColor = 'rgba(74, 222, 128, 0.8)';
                ctx.shadowBlur = 8;
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            updateSpotlight();
            updateCursorDot();
            requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {/* cursor follower dot */}
            <div
                ref={cursorDotRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '3px',
                    height: '3px',
                    background: '#4ADE80',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                }}
            />

            {/* spotlight glow */}
            <div
                ref={spotlightRef}
                style={{
                    position: 'fixed',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 5,
                    transition: 'background 0.1s linear',
                }}
            />

            {/* particle canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    inset: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 4,
                    pointerEvents: 'none',
                }}
            />
        </>
    );
};

export default SpotlightParticles;

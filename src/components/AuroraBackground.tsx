import { useEffect, useRef, useCallback, useState } from 'react';

// Perlin Noise implementation
class PerlinNoise {
    private permutation: number[];
    private p: number[];

    constructor() {
        this.permutation = [];
        for (let i = 0; i < 256; i++) {
            this.permutation[i] = Math.floor(Math.random() * 256);
        }
        this.p = new Array(512);
        for (let i = 0; i < 512; i++) {
            this.p[i] = this.permutation[i % 256];
        }
    }

    private fade(t: number): number {
        return t * t * t * (t * (t * 6 - 15) + 10);
    }

    private lerp(t: number, a: number, b: number): number {
        return a + t * (b - a);
    }

    private grad(hash: number, x: number, y: number): number {
        const h = hash & 3;
        const u = h < 2 ? x : y;
        const v = h < 2 ? y : x;
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    }

    noise(x: number, y: number): number {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;

        x -= Math.floor(x);
        y -= Math.floor(y);

        const u = this.fade(x);
        const v = this.fade(y);

        const A = this.p[X] + Y;
        const B = this.p[X + 1] + Y;

        return this.lerp(
            v,
            this.lerp(u, this.grad(this.p[A], x, y), this.grad(this.p[B], x - 1, y)),
            this.lerp(u, this.grad(this.p[A + 1], x, y - 1), this.grad(this.p[B + 1], x - 1, y - 1))
        );
    }

    // Fractional Brownian Motion for multi-layered noise
    fbm(x: number, y: number, octaves: number = 4): number {
        let value = 0;
        let amplitude = 0.5;
        let frequency = 1;

        for (let i = 0; i < octaves; i++) {
            value += amplitude * this.noise(x * frequency, y * frequency);
            amplitude *= 0.5;
            frequency *= 2;
        }

        return value;
    }
}

// Color palette - Fosil brand colors
const COLORS = {
    deepGreenBlack: { r: 14, g: 26, b: 20 },      // #0E1A14
    emeraldShadow: { r: 18, g: 52, b: 38 },        // #123426
    softEmerald: { r: 30, g: 107, b: 76 },         // #1E6B4C
    fosilGreen: { r: 143, g: 211, b: 169 },        // #8FD3A9
    vividGreen: { r: 99, g: 230, b: 167 },         // #63E6A7
    limePop: { r: 184, g: 255, b: 106 },           // #B8FF6A
    background: { r: 11, g: 15, b: 13 },           // #0B0F0D
};

interface Ripple {
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    opacity: number;
    colorShift: { r: number; g: number; b: number };
}

interface Props {
    className?: string;
}

export function AuroraBackground({ className = '' }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const perlinRef = useRef<PerlinNoise>(new PerlinNoise());
    const timeRef = useRef<number>(0);
    const mouseRef = useRef<{ x: number; y: number; prevX: number; prevY: number }>({
        x: 0.5, y: 0.5, prevX: 0.5, prevY: 0.5
    });
    const ripplesRef = useRef<Ripple[]>([]);
    const lastRippleTime = useRef<number>(0);

    // Scroll-based fade state
    const [scrollOpacity, setScrollOpacity] = useState(1);

    // Scroll fade effect - fade out as user scrolls past hero
    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight;
            const scrollY = window.scrollY;

            // Start fading after scrolling past 20% of hero
            // Reach 90% faded (opacity 0.1) by the time services section appears
            const fadeStart = heroHeight * 0.2;
            const fadeEnd = heroHeight * 0.85;

            if (scrollY <= fadeStart) {
                setScrollOpacity(1);
            } else if (scrollY >= fadeEnd) {
                setScrollOpacity(0.1); // 90% faded
            } else {
                const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
                setScrollOpacity(1 - (fadeProgress * 0.9)); // Fade from 1 to 0.1
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine color based on mouse movement direction
    const getDirectionalColor = useCallback((dx: number, dy: number) => {
        const absX = Math.abs(dx);
        const absY = Math.abs(dy);

        if (absX > absY) {
            // Horizontal movement
            return dx > 0 ? COLORS.emeraldShadow : COLORS.limePop;
        } else {
            // Vertical movement
            return dy > 0 ? COLORS.fosilGreen : COLORS.vividGreen;
        }
    }, []);

    // Add ripple at mouse position
    const addRipple = useCallback((x: number, y: number, dx: number, dy: number) => {
        const now = performance.now();
        if (now - lastRippleTime.current < 50) return; // Throttle ripple creation
        lastRippleTime.current = now;

        ripplesRef.current.push({
            x,
            y,
            radius: 0,
            maxRadius: 0.4, // Normalized radius
            opacity: 0.4,
            colorShift: getDirectionalColor(dx, dy),
        });

        // Keep only last 10 ripples
        if (ripplesRef.current.length > 10) {
            ripplesRef.current.shift();
        }
    }, [getDirectionalColor]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        const perlin = perlinRef.current;

        // Resize handler
        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        };

        resize();
        window.addEventListener('resize', resize);

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const newX = e.clientX / rect.width;
            const newY = e.clientY / rect.height;

            const dx = newX - mouseRef.current.x;
            const dy = newY - mouseRef.current.y;

            mouseRef.current.prevX = mouseRef.current.x;
            mouseRef.current.prevY = mouseRef.current.y;
            mouseRef.current.x = newX;
            mouseRef.current.y = newY;

            // Add ripple if mouse moved significantly
            if (Math.abs(dx) > 0.005 || Math.abs(dy) > 0.005) {
                addRipple(newX, newY, dx, dy);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const render = () => {
            const rect = canvas.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;

            // Clear with background color
            ctx.fillStyle = `rgb(${COLORS.background.r}, ${COLORS.background.g}, ${COLORS.background.b})`;
            ctx.fillRect(0, 0, width, height);

            const time = timeRef.current * 0.0008; // Very slow speed (0.8)
            timeRef.current++;

            // Create image data for pixel manipulation
            const imageData = ctx.createImageData(width, height);
            const data = imageData.data;

            // Parameters for multi-layer Perlin noise
            const coarseScale = 0.001;
            const mediumScale = 0.003;
            const fineScale = 0.006;

            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    const index = (y * width + x) * 4;

                    // Normalized coordinates
                    const nx = x / width;
                    const ny = y / height;

                    // Multi-layer Perlin noise for organic flow
                    const coarse = perlin.fbm(x * coarseScale + time * 0.5, y * coarseScale + time * 0.3, 3);
                    const medium = perlin.fbm(x * mediumScale + time * 0.8, y * mediumScale - time * 0.5, 4);
                    const fine = perlin.fbm(x * fineScale - time * 0.6, y * fineScale + time * 0.7, 2);

                    // Combine noise layers
                    let noiseValue = coarse * 0.5 + medium * 0.35 + fine * 0.15;
                    noiseValue = (noiseValue + 1) * 0.5; // Normalize to 0-1

                    // Breathing effect
                    const breathe = Math.sin(time * 0.5) * 0.1 + 0.9;
                    noiseValue *= breathe;

                    // Base color interpolation
                    let r = COLORS.deepGreenBlack.r * 0.85;
                    let g = COLORS.deepGreenBlack.g * 0.85;
                    let b = COLORS.deepGreenBlack.b * 0.85;

                    // Add emerald shadow layer
                    const emeraldMix = Math.max(0, noiseValue - 0.3) * 2.5 * 0.75;
                    r += (COLORS.emeraldShadow.r - r) * emeraldMix;
                    g += (COLORS.emeraldShadow.g - g) * emeraldMix;
                    b += (COLORS.emeraldShadow.b - b) * emeraldMix;

                    // Add soft emerald highlights
                    const softMix = Math.max(0, noiseValue - 0.5) * 3 * 0.65;
                    r += (COLORS.softEmerald.r - r) * softMix;
                    g += (COLORS.softEmerald.g - g) * softMix;
                    b += (COLORS.softEmerald.b - b) * softMix;

                    // Add fosil green glow (very subtle, max 0.18)
                    const fosilMix = Math.max(0, noiseValue - 0.65) * 3 * 0.18;
                    r += (COLORS.fosilGreen.r - r) * fosilMix;
                    g += (COLORS.fosilGreen.g - g) * fosilMix;
                    b += (COLORS.fosilGreen.b - b) * fosilMix;

                    // Add vivid green accent (max 0.16)
                    const vividMix = Math.max(0, noiseValue - 0.75) * 4 * 0.16;
                    r += (COLORS.vividGreen.r - r) * vividMix;
                    g += (COLORS.vividGreen.g - g) * vividMix;
                    b += (COLORS.vividGreen.b - b) * vividMix;

                    // Mouse ripple effects
                    for (const ripple of ripplesRef.current) {
                        const dx = nx - ripple.x;
                        const dy = ny - ripple.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        // Ripple ring effect
                        const ringWidth = 0.05;
                        const ringDist = Math.abs(dist - ripple.radius);

                        if (ringDist < ringWidth && ripple.opacity > 0) {
                            const ringIntensity = (1 - ringDist / ringWidth) * ripple.opacity;
                            r += (ripple.colorShift.r - r) * ringIntensity * 0.3;
                            g += (ripple.colorShift.g - g) * ringIntensity * 0.3;
                            b += (ripple.colorShift.b - b) * ringIntensity * 0.3;
                        }

                        // Inner glow
                        if (dist < ripple.radius && ripple.opacity > 0) {
                            const glowIntensity = (1 - dist / ripple.radius) * ripple.opacity * 0.15;
                            r += (ripple.colorShift.r - r) * glowIntensity;
                            g += (ripple.colorShift.g - g) * glowIntensity;
                            b += (ripple.colorShift.b - b) * glowIntensity;
                        }
                    }

                    data[index] = Math.min(255, Math.max(0, r));
                    data[index + 1] = Math.min(255, Math.max(0, g));
                    data[index + 2] = Math.min(255, Math.max(0, b));
                    data[index + 3] = 255;
                }
            }

            ctx.putImageData(imageData, 0, 0);

            // Update ripples (momentum = 25, so decay is slow)
            const momentumDecay = 1 - (1 / 25); // 0.96
            ripplesRef.current = ripplesRef.current.filter(ripple => {
                ripple.radius += 0.008;
                ripple.opacity *= momentumDecay;
                return ripple.opacity > 0.01 && ripple.radius < ripple.maxRadius;
            });

            animationRef.current = requestAnimationFrame(render);
        };

        // Optimized rendering - use lower resolution
        const optimizedRender = () => {
            // Scale down for performance
            const scale = 0.25; // Render at 25% resolution
            const rect = canvas.getBoundingClientRect();
            const width = Math.floor(rect.width * scale);
            const height = Math.floor(rect.height * scale);

            // Create offscreen canvas
            const offscreen = new OffscreenCanvas(width, height);
            const offCtx = offscreen.getContext('2d', { alpha: false });
            if (!offCtx) return;

            const time = timeRef.current * 0.0008;
            timeRef.current++;

            const imageData = offCtx.createImageData(width, height);
            const data = imageData.data;

            const coarseScale = 0.004;
            const mediumScale = 0.012;
            const fineScale = 0.024;

            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    const index = (y * width + x) * 4;

                    const nx = x / width;
                    const ny = y / height;

                    // Multi-layer Perlin noise
                    const coarse = perlin.fbm(x * coarseScale + time * 0.5, y * coarseScale + time * 0.3, 3);
                    const medium = perlin.fbm(x * mediumScale + time * 0.8, y * mediumScale - time * 0.5, 3);
                    const fine = perlin.fbm(x * fineScale - time * 0.6, y * fineScale + time * 0.7, 2);

                    let noiseValue = coarse * 0.5 + medium * 0.35 + fine * 0.15;
                    noiseValue = (noiseValue + 1) * 0.5;

                    const breathe = Math.sin(time * 0.5) * 0.1 + 0.9;
                    noiseValue *= breathe;

                    // Color mixing
                    let r = COLORS.deepGreenBlack.r * 0.85;
                    let g = COLORS.deepGreenBlack.g * 0.85;
                    let b = COLORS.deepGreenBlack.b * 0.85;

                    const emeraldMix = Math.max(0, noiseValue - 0.3) * 2.5 * 0.75;
                    r += (COLORS.emeraldShadow.r - r) * emeraldMix;
                    g += (COLORS.emeraldShadow.g - g) * emeraldMix;
                    b += (COLORS.emeraldShadow.b - b) * emeraldMix;

                    const softMix = Math.max(0, noiseValue - 0.5) * 3 * 0.65;
                    r += (COLORS.softEmerald.r - r) * softMix;
                    g += (COLORS.softEmerald.g - g) * softMix;
                    b += (COLORS.softEmerald.b - b) * softMix;

                    const fosilMix = Math.max(0, noiseValue - 0.65) * 3 * 0.18;
                    r += (COLORS.fosilGreen.r - r) * fosilMix;
                    g += (COLORS.fosilGreen.g - g) * fosilMix;
                    b += (COLORS.fosilGreen.b - b) * fosilMix;

                    const vividMix = Math.max(0, noiseValue - 0.75) * 4 * 0.16;
                    r += (COLORS.vividGreen.r - r) * vividMix;
                    g += (COLORS.vividGreen.g - g) * vividMix;
                    b += (COLORS.vividGreen.b - b) * vividMix;

                    // Mouse ripples
                    for (const ripple of ripplesRef.current) {
                        const dx = nx - ripple.x;
                        const dy = ny - ripple.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        const ringWidth = 0.06;
                        const ringDist = Math.abs(dist - ripple.radius);

                        if (ringDist < ringWidth && ripple.opacity > 0) {
                            const ringIntensity = (1 - ringDist / ringWidth) * ripple.opacity;
                            r += (ripple.colorShift.r - r) * ringIntensity * 0.35;
                            g += (ripple.colorShift.g - g) * ringIntensity * 0.35;
                            b += (ripple.colorShift.b - b) * ringIntensity * 0.35;
                        }

                        if (dist < ripple.radius && ripple.opacity > 0) {
                            const glowIntensity = (1 - dist / ripple.radius) * ripple.opacity * 0.18;
                            r += (ripple.colorShift.r - r) * glowIntensity;
                            g += (ripple.colorShift.g - g) * glowIntensity;
                            b += (ripple.colorShift.b - b) * glowIntensity;
                        }
                    }

                    data[index] = Math.min(255, Math.max(0, r));
                    data[index + 1] = Math.min(255, Math.max(0, g));
                    data[index + 2] = Math.min(255, Math.max(0, b));
                    data[index + 3] = 255;
                }
            }

            offCtx.putImageData(imageData, 0, 0);

            // Draw scaled up to main canvas with smoothing
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(offscreen, 0, 0, rect.width, rect.height);

            // Update ripples
            const momentumDecay = 0.96;
            ripplesRef.current = ripplesRef.current.filter(ripple => {
                ripple.radius += 0.006;
                ripple.opacity *= momentumDecay;
                return ripple.opacity > 0.01 && ripple.radius < ripple.maxRadius;
            });

            animationRef.current = requestAnimationFrame(optimizedRender);
        };

        optimizedRender();

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [addRipple]);

    return (
        <div
            className={`aurora-container ${className}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                contain: 'strict',
                transform: 'translateZ(0)',
                opacity: scrollOpacity,
                transition: 'opacity 150ms ease-out',
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                }}
            />
            {/* Dark overlay for contrast */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.20)',
                    pointerEvents: 'none',
                }}
            />
            {/* Grain texture overlay */}
            <svg
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.08,
                    pointerEvents: 'none',
                    mixBlendMode: 'overlay',
                }}
            >
                <filter id="grain">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.9"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#grain)" />
            </svg>
        </div>
    );
}

export default AuroraBackground;

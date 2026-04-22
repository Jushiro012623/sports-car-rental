'use client'

import {Fragment, useEffect, useRef} from "react";
import 'lenis/dist/lenis.css'
import Lenis from "lenis";

export const LenisSmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.2,
            lerp: 0.05,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return <Fragment></Fragment>
}
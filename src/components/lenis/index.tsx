'use client'

import {Fragment, useEffect} from "react";
import 'lenis/dist/lenis.css'
import Lenis from "lenis";

export const LenisSmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.07,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
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
'use client'
import Image from "next/image";
import {TestimonialEmblem} from "@components/ui/testimonial-emblem";
import {Section} from "@app/components";
import Link from "next/link";
import clsx from "clsx";

export const HeroSection = () => {

    const client = 250

    return (
        <Section id="hero" className="relative min-h-svh w-full mx-auto flex overflow-hidden sm:h-screen">
            <div className="relative mx-auto max-w-8xl w-full">
                <Image
                    src="/bmw.svg"
                    alt="bmw"
                    fill
                    className="-z-10 max-w-8xl object-cover object-[80%_center] opacity-40 mask-[linear-gradient(to_right,transparent,black,black,transparent)]"
                    priority
                />
            </div>
            <Section.Container className="absolute inset-0">
                <div className="h-full flex items-center">

                    <div className="max-w-2xl space-y-5 mt-40">
                        <TestimonialEmblem clientsCount={client}/>
                        <h1 className="capitalize text-4xl sm:text-7xl font-semibold leading-tight">
                            premium car rental in los angeles
                        </h1>
                        <p className="text-sm sm:text-base MB-5 text-white/80">
                            Experience unmatched comfort, style and service — wherever the road takes you.
                        </p>
                        <Link href={"cars"} className={clsx(
                            "text-base mt-5 capitalize button button--primary"
                        )} >
                            choose your car
                        </Link>

                    </div>

                </div>
            </Section.Container>
        </Section>
    );
};
import Image from "next/image";
import {Button} from "@heroui/react";
import {TestimonialEmblem} from "@components/ui/testimonial-emblem";
import {Section} from "@app/components";

export const HeroSection = () => {
    return (
        <Section className="relative h-screen w-full mx-auto flex">
            <Image
                src="/bmw.svg"
                alt="bmw"
                fill
                className="object-cover opacity-30"
                priority
            />
            <Section.Container className=" absolute inset-0">
                <div className="h-full flex items-center">
                    <div className="max-w-2xl space-y-5 mt-40">
                        <TestimonialEmblem />
                        <h1 className="capitalize text-4xl sm:text-7xl font-semibold leading-tight">
                            premium car rental in los angeles
                        </h1>
                        <p className="text-sm sm:text-base text-white/80">
                            Experience unmatched comfort, style and service — wherever the road takes you.
                        </p>
                        <Button className="capitalize mt-5" size={'lg'}>
                            choose your car
                        </Button>

                    </div>

                </div>
            </Section.Container>
        </Section>
    );
};
import Image from "next/image";
import {Button, Chip} from "@heroui/react";
import {GiCutDiamond} from "react-icons/gi";

export const HeroSection = () => {
    return (
        <section className="relative h-screen w-full mx-auto flex">
            <Image
                src="/bmw.svg"
                alt="bmw"
                fill
                className="object-cover opacity-30"
                priority
            />
            <div className=" absolute inset-0">
                <div className="max-w-8xl mx-auto h-full px-6 sm:px-10 flex items-center">
                    <div className="max-w-2xl space-y-5 mt-40">
                        <Chip size="lg" variant="primary">
                            <GiCutDiamond size={15}/>
                            <span className="ml-2">
                                Chosen by more than 250 clients
                            </span>
                        </Chip>
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
            </div>
        </section>
    );
};
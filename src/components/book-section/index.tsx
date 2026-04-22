import {Section, TitleText} from "@app/components";
import {Avatar, Button} from "@heroui/react";
import Image from "next/image";
import clsx from "clsx";

export const BookSection = () => {
    return (
        <Section className="w-full relative overflow-hidden">

            {/* Content */}
            <Section.Container className="pt-50 relative z-10">
                <TitleText className="text-center max-w-3xl mx-auto">
                    Book your premium car and have it delivered in 90 minutes
                </TitleText>

                <div className="flex flex-col items-center gap-4 mt-30">
                    <Avatar className="size-25 bg-transparent">
                        <Avatar.Image
                            alt="Thomas Sheleby"
                            src="/thomas-shelby.jpg"
                            loading="eager"
                        />
                        <Avatar.Fallback>TS</Avatar.Fallback>
                    </Avatar>

                    <div className="text-center">
                        <h1 className="font-medium text-xl">Thomas Shelby</h1>
                        <p className="text-base text-subtitle/70">
                            Your Personal Rental Assistant
                        </p>
                    </div>

                    <Button className="mt-5">Book Now</Button>
                </div>
            </Section.Container>

            {/* Background Image (after container) */}
            <div className="absolute inset-0 -z-10 opacity-15">
                <Image
                    src="/bmw-bg.png"
                    alt="PORSCHE"
                    fill
                    className="object-cover"
                />

                {/* Vignette */}
                <div className={clsx(
                    "pointer-events-none absolute inset-0 ",
                    "bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.85)_100%)]"
                )}/>
            </div>
        </Section>
    )
}
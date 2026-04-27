import {Section, TitleText} from "@app/components";
import {Avatar} from "@heroui/react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

export const BookSection = () => {
    return (
        <Section className="w-full relative overflow-hidden">

            {/* Content */}
            <Section.Container className="pt-28 sm:pt-36 lg:pt-50 relative z-10">
                <TitleText className="text-center max-w-3xl mx-auto">
                    Book your premium car and have it delivered in 90 minutes
                </TitleText>

                <div className="flex flex-col items-center gap-4 mt-14 sm:mt-20 lg:mt-30">
                    <Avatar className="size-20 bg-transparent sm:size-25">
                        <Avatar.Image
                            alt="Thomas Sheleby"
                            src="/thomas-shelby.jpg"
                            loading="eager"
                        />
                        <Avatar.Fallback>TS</Avatar.Fallback>
                    </Avatar>

                    <div className="text-center">
                        <h1 className="font-medium text-lg sm:text-xl">Thomas Shelby</h1>
                        <p className="text-sm text-subtitle/70 sm:text-base">
                            Your Personal Rental Assistant
                        </p>
                    </div>

                    <Link href={"booking"}  className="button button--primary mt-4 w-full text-center sm:mt-5 sm:w-auto">Book Now</Link>
                </div>
            </Section.Container>

            {/* Background Image (after container) */}
            <div className="absolute inset-0 -z-10 opacity-15">
                <Image
                    src="/bmw-bg.png"
                    alt="PORSCHE"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />

                {/* Vignette */}
                <div className={clsx(
                    "pointer-events-none absolute inset-0 ",
                    "bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.9)_100%)] sm:bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.85)_100%)]"
                )}/>
            </div>
        </Section>
    )
}
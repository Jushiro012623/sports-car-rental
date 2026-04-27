import {Section, TitleText} from "@app/components";
import Image from "next/image";
import {Card} from "@heroui/react";
import clsx from "clsx";
import {rentalGuide} from "@app/constants";

export const GuideSection = () => {
    return (
        <Section className="w-full min-h-screen">
            <Section.Container className="pt-28 sm:pt-36 lg:pt-50">
                <TitleText className="text-center">
                    Get Rolling in 4 Steps
                </TitleText>

                <div className="grid grid-cols-1 gap-5 pt-12 sm:pt-16 lg:grid-cols-4 lg:pt-30">

                    <Card className="bg-transparent relative min-h-80 overflow-hidden sm:min-h-96 lg:col-span-2 lg:aspect-square lg:min-h-0">
                        <Image
                            src="/svj.png"
                            alt="Lamborghini Aventador SVJ"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </Card>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2">
                        {rentalGuide.map(({id, guide, description}) => (
                            <Card
                                key={id}
                                className={clsx(
                                    "bg-container-elevated p-5 sm:p-6",
                                    "flex flex-col gap-3 items-center justify-center",
                                    "px-5 sm:px-8"
                                )}
                            >
                                <span
                                    className="bg-container-muted p-3.5 text-subtitle rounded-xl w-fit aspect-square text-center text-lg sm:text-xl font-semibold">
                                    {id}
                                </span>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-center text-lg sm:text-xl font-semibold">
                                        {guide}
                                    </h3>
                                    <p className="text-center font-light text-sm sm:text-md text-subtitle/70">
                                        {description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section.Container>
        </Section>
    )
}
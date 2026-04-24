import {Section, TitleText} from "@app/components";
import Image from "next/image";
import {Card} from "@heroui/react";
import clsx from "clsx";
import {rentalGuide} from "@app/constants";

export const GuideSection = () => {
    return (
        <Section className="w-full min-h-screen">
            <Section.Container className="pt-50">
                <TitleText className="text-center">
                    Get Rolling in 4 Steps
                </TitleText>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 pt-30">

                    <Card className="bg-transparent relative lg:col-span-2 aspect-square overflow-hidden">
                        <Image
                            src="/svj.png"
                            alt="Lamborghini Aventador SVJ"
                            fill
                            className="object-cover"
                        />
                    </Card>

                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {rentalGuide.map(({id, guide, description}) => (
                            <Card
                                key={id}
                                className={clsx(
                                    "bg-container-elevated p-6",
                                    "flex flex-col gap-3 items-center justify-center",
                                    "px-8"
                                )}
                            >
                                <span
                                    className="bg-container-muted p-3.5 text-subtitle rounded-xl w-fit aspect-square text-center text-xl font-semibold">
                                    {id}
                                </span>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-center text-xl font-semibold">
                                        {guide}
                                    </h3>
                                    <p className="text-center font-light text-md text-subtitle/70">
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
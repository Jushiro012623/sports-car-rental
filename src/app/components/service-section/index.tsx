import {Section, TitleText} from "@app/components";
import Image from "next/image";
import {Card} from "@heroui/react";
import clsx from "clsx";
import {rentalService} from "@app/constants";

export const ServiceSection = () => {
    return (
        <Section className="w-full min-h-screen">
            <Section.Container className="pt-28 sm:pt-36 lg:pt-50">
                <TitleText className="text-center">
                    Premium service, zero hassle
                </TitleText>

                <div className="grid grid-cols-1 gap-5 pt-12 sm:pt-16 lg:grid-cols-2 lg:pt-30">
                    {rentalService.map(({id, service, description, imgSrc}) => (
                        <Card
                            key={id}
                            className="bg-transparent min-h-80 overflow-hidden rounded-3xl relative group sm:min-h-96 lg:min-h-100"
                        >
                            <Card.Content className="absolute inset-0">
                                <Image
                                    src={imgSrc}
                                    alt={service}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover object-bottom opacity-70 scale-100 group-hover:scale-102 transition-transform duration-500"
                                    loading={'eager'}
                                />
                            </Card.Content>

                            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-500" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent z-10" />
                            <Card.Footer className={clsx(
                                "relative z-10 mt-auto flex items-start justify-between p-4 sm:p-5",
                                "transition-all duration-500",
                                "flex-col"
                            )}>
                                <div className="text-xl font-medium text-white sm:text-2xl">
                                    {service}
                                </div>
                                <div className="mt-3 max-w-md text-sm text-subtitle sm:text-md">
                                    {description}
                                </div>
                            </Card.Footer>

                        </Card>
                    ))}
                </div>
            </Section.Container>
        </Section>
    )
}
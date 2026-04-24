import {Section, TitleText} from "@app/components";
import Image from "next/image";
import {Button, Card} from "@heroui/react";
import clsx from "clsx";
import {FaAngleRight} from "react-icons/fa6";
import {rentalService} from "@app/constants";

export const ServiceSection = () => {
    return (
        <Section className="w-full min-h-screen">
            <Section.Container className="pt-50">
                <TitleText className="text-center">
                    Premium service, zero hassle
                </TitleText>

                <div className="grid grid-cols-4  gap-5 pt-30">
                    {rentalService.map(({id, service, description, imgSrc}) => (
                        <Card key={id} className="bg-transparent col-span-2 min-h-100 overflow-hidden rounded-3xl relative group">
                            <Card.Content className="absolute inset-0">
                                <Image
                                    src={imgSrc}
                                    alt="Dodge Charger"
                                    fill
                                    className="object-cover object-bottom opacity-70  scale-100 group-hover:scale-102 transition-transform duration-500"
                                    loading={'eager'}
                                />
                            </Card.Content>

                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent z-10" />
                            <Card.Footer className={clsx(
                                "relative z-10 mt-auto flex items-start justify-between p-5",
                                "transition-all duration-500",
                                "flex-col "
                            )}>
                                <div className="text-2xl font-medium text-white">
                                    {service}
                                </div>
                                <div className="mt-3 max-w-md text-md text-sm text-subtitle">
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
import type {Metadata} from "next";
import {CarCard, Section, TitleText} from "@app/components";
import {carModels} from "@app/constants";
import {CarInfo} from "@app/types";
import {CarFilters} from "@app/app/cars/components";
import {Button} from "@heroui/react";
import clsx from "clsx";

export const metadata: Metadata = {
    title: "Infinity | Cars",
    description: "Infinity Car Rental Cars Page",
    icons: {
        icon: "./icon.png",
    },
};

export default function CarsPage() {
    return (
        <Section className="min-h-screen w-full">
            <Section.Container className="pt-50">
                <TitleText className={'capitalize text-center'}>Available Cars</TitleText>
                <CarFilters />
                <div className="grid grid-cols-4 gap-5 mt-20">
                    {carModels.map((car: CarInfo) => (
                        <CarCard key={car.id} {...car} />
                    ))}
                </div>
                <div className={clsx(
                    "flex w-full justify-center pt-15"
                )}>
                    <Button variant={"tertiary"}>Show More Cars</Button>
                </div>
            </Section.Container>
        </Section>
    );
}

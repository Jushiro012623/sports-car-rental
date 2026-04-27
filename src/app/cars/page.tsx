import type {Metadata} from "next";
import {CarCard, Section, TitleText} from "@app/components";
import {carModels} from "@app/constants";
import {CarInfo} from "@app/types";
import {CarFilters} from "@app/app/cars/components";
import {Button} from "@heroui/react";
import clsx from "clsx";

export const metadata: Metadata = {
    title: "Turismo | Cars",
    description: "Turismo Car Rental Cars Page"
};

export default function CarsPage() {
    return (
        <Section className="min-h-screen w-full">
            <Section.Container className="pt-28 sm:pt-36 lg:pt-50">
                <TitleText className={'capitalize text-center'}>Available Cars</TitleText>
                <CarFilters />
                <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 sm:mt-16 lg:grid-cols-3 xl:grid-cols-4 lg:mt-20">
                    {carModels.map((car: CarInfo) => (
                        <CarCard key={car.id} {...car} />
                    ))}
                </div>
                <div className={clsx(
                    "flex w-full justify-center pt-10 sm:pt-12 lg:pt-15"
                )}>
                    <Button variant={"tertiary"} className="w-full sm:w-auto">Show More Cars</Button>
                </div>
            </Section.Container>
        </Section>
    );
}

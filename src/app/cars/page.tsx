import type {Metadata} from "next";
import {Section, TitleText} from "@app/components";
import {carModels} from "@app/constants";
import {CarsCatalog} from "@app/app/cars/components";

export const metadata: Metadata = {
    title: "Turismo | Cars",
    description: "Turismo Car Rental Cars Page"
};

export default function CarsPage() {
    return (
        <Section className="min-h-screen w-full">
            <Section.Container className="pt-28 sm:pt-36 lg:pt-50">
                <TitleText className={'capitalize text-center'}>Available Cars</TitleText>
                <CarsCatalog cars={carModels} />
            </Section.Container>
        </Section>
    );
}

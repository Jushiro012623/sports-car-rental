import type {Metadata} from "next";
import {Card} from "@heroui/react";
import {rentalRequirements} from "@app/constants";
import {Section, TitleText} from "@app/components";
import {RentalRequirements} from "@app/types";

export const metadata: Metadata = {
    title: "Turismo | Rental Terms",
    description: "Turismo Car Rental Terms and Requirements Page"
};

export default function RentalTermsPage() {
    return (
        <Section className="min-h-screen w-full">
            <Section.Container className="pt-28 sm:pt-36 lg:pt-50">
                <div className="mx-auto max-w-3xl text-center">
                    <TitleText className="capitalize">
                        Rental Terms
                    </TitleText>

                    <p className="mt-4 text-base text-subtitle sm:text-lg">
                        Review the key requirements and rental conditions before booking your premium car.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 lg:grid-cols-2 lg:mt-20">
                    {rentalRequirements.map(({id, requirement, icon: Icon, description, breakdown}: RentalRequirements) => (
                        <Card
                            key={id}
                            className="bg-container-elevated rounded-3xl p-6 sm:p-8"
                        >
                            <div className="flex flex-col gap-6 sm:flex-row">
                                <span className="bg-container-muted block size-14 shrink-0 rounded-xl p-3.5">
                                    <Icon className="size-full"/>
                                </span>

                                <div className="flex flex-col gap-4">
                                    <div>
                                        <h2 className="text-xl font-semibold">
                                            {requirement}
                                        </h2>
                                        <p className="mt-1 text-sm text-subtitle/70">
                                            {description}
                                        </p>
                                    </div>

                                    <ul className="flex flex-col gap-3 text-sm text-subtitle">
                                        {breakdown.map((item) => (
                                            <li key={item} className="flex gap-3">
                                                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground"/>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section.Container>
        </Section>
    );
}
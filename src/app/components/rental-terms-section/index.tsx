import {Avatar, Button, Card} from "@heroui/react";
import {rentalRequirements} from "@app/constants";
import {Section, TitleText} from "@app/components";
import {RentalRequirements} from "@app/types";

export const RentalTermsSection = () => {
    return (
        <Section id="rental-terms" className="w-full">
            <Section.Container className="pt-28 sm:pt-36 lg:pt-50">
                <div
                    className="bg-container w-full min-h-120 rounded-3xl px-5 py-8 sm:px-8 sm:py-10 lg:px-15 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

                    <div className="flex flex-col justify-center gap-8 lg:gap-10">

                        <div>
                            <TitleText>
                                Rental Terms
                            </TitleText>

                            <p className="text-subtitle text-base sm:text-lg mt-3 max-w-md">
                                We&#39;re here for you — ready to help find the perfect car that matches your needs.
                            </p>
                        </div>

                        {/* Avatar */}
                        <div className="flex items-center gap-4">
                            <Avatar className={'size-12 bg-transparent'}>
                                <Avatar.Image
                                    alt="Thomas Sheleby"
                                    src="/thomas-shelby.jpg"
                                    loading={'eager'}
                                />
                                <Avatar.Fallback>TS</Avatar.Fallback>
                            </Avatar>

                            <div>
                                <h1 className="font-medium">Thomas Shelby</h1>
                                <p className="text-sm text-subtitle/70">
                                    Your Personal Rental Assistant
                                </p>
                            </div>
                        </div>

                        <Button className="capitalize w-full sm:w-fit">
                            call us now
                        </Button>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-5">
                        {rentalRequirements.map(({id, requirement, icon: Icon, description}: RentalRequirements) => (
                            <Card key={id}
                                 className="bg-container-elevated rounded-3xl p-10 flex justify-start sm:justify-center flex-row sm:flex-col gap-5">
                                <span className={'bg-container-muted p-3.5 rounded-xl block size-13'}>
                                    <Icon className={"size-full"}/>
                                </span>
                                <div className="flex flex-col">
                                    <h3 className={"text-lg font-semibold"}>{requirement}</h3>
                                    <p className={"text-sm text-subtitle/70"}>{description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>

                </div>

            </Section.Container>
        </Section>
    )
}
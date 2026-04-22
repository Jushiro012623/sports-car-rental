import {Avatar, Button} from "@heroui/react";
import {rentalRequirements} from "@app/constants";
import {TitleText} from "@app/components";
import {RentalRequirements} from "@app/types";

export const RentalTermsSection = () => {
    return (
        <section className="w-full">
            <div className="max-w-8xl pt-50 mx-auto px-6 sm:px-10">

                <div
                    className="bg-container w-full min-h-120 rounded-3xl px-15 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

                    <div className="flex flex-col justify-center gap-10">

                        <div>
                            <TitleText>
                                Rental Terms
                            </TitleText>

                            <p className="text-subtitle text-lg mt-3 max-w-md">
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

                        <Button className="capitalize w-fit">
                            call us now
                        </Button>

                    </div>

                    {/* RIGHT SIDE (2x2 GRID) */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-5">
                        {rentalRequirements.map(({id, requirement, icon: Icon, description}: RentalRequirements) => (
                            <div key={id}
                                 className="bg-container-elevated rounded-3xl p-10 flex justify-center flex-col gap-5">
                            <span className={'bg-container-muted p-3.5 rounded-xl w-fit'}>
                                <Icon size={25}/>
                            </span>
                                <div className="flex flex-col">
                                    <h3 className={"text-lg font-semibold"}>{requirement}</h3>
                                    <p className={"text-sm text-subtitle/70"}>{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}
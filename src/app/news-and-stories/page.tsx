import {NewAndStoriesCard, Section, TitleText} from "@app/components";
import {newsAndStories} from "@app/constants";
import type {Metadata} from "next";
import {Button} from "@heroui/react";
import clsx from "clsx";


export const metadata: Metadata = {
    title: "Turismo | News and Stories",
    description: "Turismo Car Rental News and Stories Page"
};

export default function NewsAndStoriesPage() {
    return (
        <Section id="news" className={'w-full'}>
            <Section.Container className={"pt-28 sm:pt-36 lg:pt-50"}>
                <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <TitleText>News and Stories</TitleText>
                </div>
                <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 sm:mt-16 lg:grid-cols-3 lg:mt-30">
                    {newsAndStories.map((item) => (
                        <NewAndStoriesCard {...item} key={item.id}/>
                    ))}
                </div>
                <div className={clsx(
                    "flex w-full justify-center pt-10 sm:pt-12 lg:pt-15"
                )}>
                    <Button variant={"tertiary"} className="w-full sm:w-auto">Show More</Button>
                </div>

            </Section.Container>
        </Section>
    )
}
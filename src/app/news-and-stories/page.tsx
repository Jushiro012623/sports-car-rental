import type {Metadata} from "next";
import {NewAndStoriesCard, Section, TitleText} from "@app/components";
import {newsAndStories} from "@app/constants";
import {Button} from "@heroui/react";
import clsx from "clsx";

export const metadata: Metadata = {
    title: "Infinity | News and Stories",
    description: "Infinity Car Rental News and Stories Page",
    icons: {
        icon: "./icon.png",
    },
};

export default function NewsAndStoriesPage() {
    return (
        <Section className="min-h-screen w-full">
            <Section.Container className="pt-50">
                <TitleText className={'capitalize text-center'}>News and Stories</TitleText>
                <div className="grid grid-cols-3 gap-5 mt-30">
                    {newsAndStories.map((item) => (
                        <NewAndStoriesCard {...item} key={item.id}/>
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

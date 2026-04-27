import {Button, Card} from "@heroui/react";
import Image from "next/image";
import clsx from "clsx";

export const NewAndStoriesCard = ({
                                      imgSrc, headline, date
                                  }: { imgSrc: string; headline: string, date: string }) => {
    return (
        <Card className="bg-transparent min-h-80 overflow-hidden rounded-3xl relative group sm:min-h-96 lg:min-h-100">
            <Card.Content className="absolute inset-0">
                <Image
                    src={imgSrc}
                    alt={headline}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-bottom opacity-70 scale-100 group-hover:scale-102 transition-transform duration-500"
                    loading={'eager'}
                />
            </Card.Content>
            <div
                className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500"/>

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"/>
            <Card.Header className={"z-10 text-sm sm:text-md"}>
                {date}
            </Card.Header>
            <Card.Footer className={clsx(
                "relative z-10 mt-auto flex items-start justify-between p-4 sm:p-5",
                "transition-all duration-500",
                "flex-col "
            )}>
                <div className="text-base font-medium text-white sm:text-md">
                    {headline}
                </div>
                <Button className={'mt-5 w-full'}>Read More</Button>
            </Card.Footer>

        </Card>
    )
}
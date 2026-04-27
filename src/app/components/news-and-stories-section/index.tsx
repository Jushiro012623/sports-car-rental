import {NewAndStoriesCard, Section, TitleText} from "@app/components";
import {newsAndStories} from "@app/constants";
import Link from "next/link";

export const NewsAndStoriesSection = () => {
    return (
        <Section id="news" className={'w-full'}>
            <Section.Container className={"pt-28 sm:pt-36 lg:pt-50"}>
                <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <TitleText>Our Latest News and Stories</TitleText>
                    <Link href="/news-and-stories" className={"button button--primary w-full text-center sm:w-auto"}>Explore News</Link>
                </div>
                <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 sm:mt-16 lg:grid-cols-3 lg:mt-30">
                    {newsAndStories.slice(0,3).map((item) => (
                       <NewAndStoriesCard {...item} key={item.id}/>
                    ))}
                </div>

            </Section.Container>
        </Section>
    )
}
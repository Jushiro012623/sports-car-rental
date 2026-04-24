import {NewAndStoriesCard, Section, TitleText} from "@app/components";
import {newsAndStories} from "@app/constants";
import Link from "next/link";

export const NewsAndStoriesSection = () => {
    return (
        <Section id="news" className={'w-full'}>
            <Section.Container className={"pt-50"}>
                <div className="flex justify-between w-full items-center">
                    <TitleText>Our Latest News and Stories</TitleText>
                    <Link href="/news-and-stories" className={"button button--primary"}>Explore News</Link>
                </div>
                <div className="grid grid-cols-3 gap-5 mt-30">
                    {newsAndStories.slice(0,3).map((item) => (
                       <NewAndStoriesCard {...item} key={item.id}/>
                    ))}
                </div>

            </Section.Container>
        </Section>
    )
}
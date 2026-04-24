import {TestimonialEmblem} from "@components/ui/testimonial-emblem";
import {Section, TestimonialCard, TitleText} from "@app/components";
import {clientTestimonials} from "@app/constants";
import {Testimonials} from "@app/types";

export const TestimonialSection = () => {
    return (
        <Section className="min-h-screen w-full">
            <Section.Container className="pt-50">
                <div className="flex items-center flex-col gap-10">
                    <TestimonialEmblem clientsCount={250} className={'py-2 px-4'}/>
                    <TitleText className={"w-[17ch] text-center leading-20"}>Read Testimonials, Ride with
                        confidence</TitleText>
                </div>
                <div className="grid grid-cols-3 grid-rows-1 gap-5 mt-30 ">
                    {clientTestimonials.map((testimonial: Testimonials) => (
                        <TestimonialCard key={testimonial.id} {...testimonial} />
                    ))}
                </div>
            </Section.Container>
        </Section>
    )
}
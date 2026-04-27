import {TestimonialEmblem} from "@components/ui/testimonial-emblem";
import {Section, TestimonialCard, TitleText} from "@app/components";
import {clientTestimonials} from "@app/constants";
import {Testimonials} from "@app/types";

export const TestimonialSection = () => {
    return (
        <Section className="min-h-screen w-full">
            <Section.Container className="pt-28 sm:pt-36 lg:pt-50">
                <div className="flex items-center flex-col gap-6 sm:gap-10">
                    <TestimonialEmblem clientsCount={250} className={'py-2 px-4'}/>
                    <TitleText className={"max-w-[17ch] text-center leading-tight sm:leading-16 lg:leading-20"}>Read Testimonials, Ride with
                        confidence</TitleText>
                </div>
                <div className="grid grid-cols-1 gap-5 mt-12 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:mt-30">
                    {clientTestimonials.map((testimonial: Testimonials) => (
                        <TestimonialCard key={testimonial.id} {...testimonial} />
                    ))}
                </div>
            </Section.Container>
        </Section>
    )
}
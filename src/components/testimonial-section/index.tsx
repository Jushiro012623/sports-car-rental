import {TestimonialEmblem} from "@components/ui/testimonial-emblem";
import {TestimonialCard, TitleText} from "@app/components";
import {clientTestimonials} from "@app/constants";
import {Testimonials} from "@app/types";

export const TestimonialSection = () => {
    return (
        <section className="min-h-screen w-full">
            <div className="max-w-8xl pt-50 mx-auto px-6 sm:px-10">
                <div className="flex items-center flex-col gap-10">
                    <TestimonialEmblem className={'py-2 px-4'}/>
                    <TitleText className={"w-[17ch] text-center leading-20"}>Read Testimonials, Ride with
                        confidence</TitleText>
                </div>
                <div className="grid grid-cols-3 grid-rows-1 gap-10 mt-30 ">
                    {clientTestimonials.map((testimonial: Testimonials) => (
                        <TestimonialCard key={testimonial.id} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}
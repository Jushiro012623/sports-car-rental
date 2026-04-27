import type {Metadata} from "next";
import {Section, TitleText} from "@app/components";
import {Avatar, Button, Form} from "@heroui/react";
import {Fragment} from "react";
import {FAQSection} from "@app/app/components";
import {BookingForm} from "@app/app/booking/components";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Turismo | Booking",
    description: "Turismo Car Rental Booking Page"
};

export default function BookingPage() {
    return (
       <Fragment>
           <Section className="w-full relative overflow-hidden">

               {/* Content */}
               <Section.Container className="pt-28 sm:pt-36 lg:pt-50 relative z-10">
                   <TitleText className="capitalize text-center max-w-3xl mx-auto">
                       Book your premium car today
                   </TitleText>

                   <div className="flex flex-col items-center gap-4 mt-14 sm:mt-20 lg:mt-30">
                       <Avatar className="size-20 bg-transparent sm:size-25">
                           <Avatar.Image
                               alt="Thomas Sheleby"
                               src="/thomas-shelby.jpg"
                               loading="eager"
                           />
                           <Avatar.Fallback>TS</Avatar.Fallback>
                       </Avatar>

                       <div className="text-center">
                           <h1 className="font-medium text-lg sm:text-xl">Thomas Shelby</h1>
                           <p className="text-sm text-subtitle/70 sm:text-base">
                               Your Personal Rental Assistant
                           </p>
                       </div>

                       <Button className="mt-4 w-full sm:mt-5 sm:w-auto">Call Us Now</Button>
                   </div>
                   <div className="relative w-full mt-14 overflow-hidden rounded-3xl p-3 sm:mt-20 sm:p-8 lg:mt-30 lg:rounded-4xl lg:p-20">
                       <Image
                           src="/gt.png"
                           alt="FORM BG"
                           fill
                           priority
                           sizes="(max-width: 768px) 100vw, 1200px"
                           className="object-cover -z-10"
                           loading="eager"
                       />
                       <Form className={"mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-6 rounded-3xl bg-container p-5 sm:gap-8 sm:p-8 lg:gap-10 lg:p-10"}>
                           <BookingForm />
                       </Form>
                   </div>
               </Section.Container>
           </Section>
           <FAQSection />
       </Fragment>
    );
}

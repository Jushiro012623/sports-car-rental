import type {Metadata} from "next";
import {Section, TitleText} from "@app/components";
import {Avatar, Button, Form} from "@heroui/react";
import {Fragment} from "react";
import {FAQSection} from "@app/app/components";
import {BookingForm} from "@app/app/booking/components";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Infinity | Booking",
    description: "Infinity Car Rental Booking Page",
    icons: {
        icon: "./icon.png",
    },
};

export default function BookingPage() {
    return (
       <Fragment>
           <Section className="w-full relative overflow-hidden">

               {/* Content */}
               <Section.Container className="pt-50 relative z-10">
                   <TitleText className="capitalize text-center max-w-3xl mx-auto">
                       Book your premium car today
                   </TitleText>

                   <div className="flex flex-col items-center gap-4 mt-30">
                       <Avatar className="size-25 bg-transparent">
                           <Avatar.Image
                               alt="Thomas Sheleby"
                               src="/thomas-shelby.jpg"
                               loading="eager"
                           />
                           <Avatar.Fallback>TS</Avatar.Fallback>
                       </Avatar>

                       <div className="text-center">
                           <h1 className="font-medium text-xl">Thomas Shelby</h1>
                           <p className="text-base text-subtitle/70">
                               Your Personal Rental Assistant
                           </p>
                       </div>

                       <Button className="mt-5">Call Us Now</Button>
                   </div>
                   <div className="relative w-full mt-30 p-20 rounded-4xl  overflow-hidden">
                       <Image
                           src="/gt.png"
                           alt="FORM BG"
                           fill
                           priority
                           sizes="(max-width: 768px) 100vw, 1200px"
                           className="object-cover -z-10"
                           loading="eager"
                       />
                       <Form className={"p-10 rounded-3xl max-w-lg mx-auto flex items-center justify-center bg-container flex-col gap-10"}>
                           <BookingForm />
                       </Form>
                   </div>
               </Section.Container>
           </Section>
           <FAQSection />
       </Fragment>
    );
}

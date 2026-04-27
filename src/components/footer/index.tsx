import { Section } from "@app/components";
import Image from "next/image";
import Link from "next/link";
import {contacts, navigations, securityNav} from "@app/constants";
import {Button, Form, SearchField, Separator} from "@heroui/react";
import {
    SiAstonmartin, SiAudi,
    SiBmw, SiFerrari,
    SiLamborghini,
    SiMazda,
    SiMclaren,
    SiMitsubishi,
    SiNissan,
    SiPorsche,
} from "react-icons/si";
export const Footer = () => {
    return (
        <Section className="w-full bg-container py-12 mt-16 sm:py-16 sm:mt-20 lg:py-20 lg:mt-30 overflow-hidden">
            <Section.Container className={"flex flex-col"}>
                <div className="grid grid-cols-5 gap-5 sm:grid-cols-10">
                    <SiMitsubishi className={"size-9 justify-self-center sm:size-12 lg:size-15"}/>
                    <SiNissan className={"size-9 justify-self-center sm:size-12 lg:size-15"}/>
                    <SiPorsche className={"size-9 justify-self-center sm:size-12 lg:size-15"}/>
                    <SiBmw className={"size-9 justify-self-center sm:size-12 lg:size-15"}/>
                    <SiFerrari className={"size-9 justify-self-center sm:size-12 lg:size-15"}/>
                    <SiAudi className={"size-9 justify-self-center sm:size-12 lg:size-15"}/>
                    <SiLamborghini className={"size-9 justify-self-center sm:size-12 lg:size-15"}/>
                    <SiAstonmartin className={"size-9 justify-self-center sm:size-12 lg:size-15"}/>
                    <SiMazda className={"size-9 justify-self-center sm:size-12 lg:size-15"}/>
                    <SiMclaren className={"size-9 justify-self-center sm:size-12 lg:size-15"}/>
                </div>
                <Separator className="my-8 sm:my-10" />
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_24rem] lg:items-start">
                    <div className="flex min-w-0 flex-col items-start gap-5">
                        <Link href='/' className='flex justify-center items-center '>
                            <Image
                                src='/logo.svg'
                                alt='logo'
                                width={150}
                                height={100}
                                className='object-cover '
                                loading={'eager'}
                            />
                        </Link>
                        <ul className="text-subtitle flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-10 lg:gap-x-15">
                            {navigations.map(({id, name}) => (
                                <li key={id}><Link href='/'>{name}</Link></li>
                            ))}
                        </ul>
                        <Separator />
                        <ul className="flex w-full flex-col gap-3">
                            {contacts.map(({id, name, value}) => (
                                <li key={id} className={"grid grid-cols-[5rem_1fr] gap-3"}>
                                    <span className={"text-white"}>{name}:</span>
                                    <span className={"min-w-0 wrap-break-word text-subtitle"}>{value}</span>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <Form className="flex w-full min-w-0 flex-col gap-5 lg:max-w-sm lg:justify-self-end">
                        <h1 className={"text-left"}>Join our mailing list and never miss on update!</h1>
                        <SearchField name="search" className={"w-full"}>
                            <SearchField.Group className={"flex w-full h-auto gap-3 rounded-3xl px-2 py-2 sm:flex-row sm:items-center sm:rounded-full"}>
                                <SearchField.Input className="min-w-0 w-full px-4 py-3 sm:flex-1 sm:py-0" placeholder="Enter your email" />
                                <Button className={"w-24 shrink-0 rounded-full spx-6 py-3 sm:w-auto"}>Submit</Button>
                            </SearchField.Group>
                        </SearchField>
                        <h1 className={"text-left text-subtitle text-sm"}>By subscribing to our newsletter, you agree to receive emails from us and accept out <Link href={'#'} className={"text-white "}> Privacy Policy</Link> </h1>
                    </Form>
                </div>
                <Separator className="my-8 sm:my-10" />
                <div className="flex flex-col items-start gap-5 text-sm sm:text-base lg:flex-row lg:items-center lg:justify-between">
                    <h1>© {new Date().getFullYear()} Turismo . All rights reserved.</h1>
                    <ul className="text-subtitle flex flex-wrap gap-x-6 gap-y-3 lg:justify-end lg:gap-10">
                        {securityNav.map(({id, name}) => (
                            <li key={id}><Link href='/'>{name}</Link></li>
                        ))}
                    </ul>
                </div>
            </Section.Container>
        </Section>
    );
};
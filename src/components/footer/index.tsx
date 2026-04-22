import { Section } from "@app/components";
import Image from "next/image";
import Link from "next/link";
import {contacts, navigations, securityNav} from "@app/constants";
import {Button, Form, SearchField} from "@heroui/react";
export const Footer = () => {
    return (
        <Section className="w-full bg-container py-20 mt-30">
            <Section.Container className={" flex flex-col"}>
                <div className="flex justify-between">
                    <div className="flex flex-col items-start gap-5">
                        <Link href='/' className='flex justify-center items-center '>
                            <Image
                                src='/logo.png'
                                alt='logo'
                                width={200}
                                height={100}
                                className='object-contain h-auto w-auto'
                                loading={'eager'}
                            />
                        </Link>
                        <ul className="text-subtitle flex gap-15">
                            {navigations.map(({id, name}) => (
                                <li key={id}><Link href='/'>{name}</Link></li>
                            ))}
                        </ul>
                        <ul className=" flex flex-col gap-3 border-t pt-5">
                            {contacts.map(({id, name, value}) => (
                                <li key={id} className={"flex gap-3"}>
                                    <span className={"w-20 text-white"}>{name}:</span>
                                    <span className={"text-subtitle"}>{value}</span>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <Form className="flex flex-col gap-5 w-sm">
                        <h1 className={"ml-3 "}>Join our mailing list and never miss on update!</h1>
                        <SearchField name="search">
                            <SearchField.Group className={"py-7 px-2  rounded-full"}>
                                <SearchField.Input className="w-70" placeholder="Search..." />
                                <Button className={"h-full rounded-full"}>Submit</Button>
                            </SearchField.Group>
                        </SearchField>
                        <h1 className={"ml-3 text-subtitle text-sm"}>By subscribing to our newsletter, you agree to receive emails from us and accept out <Link href={'#'} className={"text-white "}> Privacy Policy</Link> </h1>
                    </Form>
                </div>
                <div className="flex justify-between border-t mt-20 mb-10 pt-10">
                    <h1>© {new Date().getFullYear()} Infinity . All rights reserved.</h1>
                    <ul className="text-subtitle flex gap-10">
                        {securityNav.map(({id, name}) => (
                            <li key={id}><Link href='/'>{name}</Link></li>
                        ))}
                    </ul>
                </div>
            </Section.Container>
        </Section>
    );
};
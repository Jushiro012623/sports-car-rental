'use client'

import Image from "next/image";
import {navigations, socialLinks} from "@app/constants";
import {useEffect, useState} from "react";
import clsx from "clsx";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

export const NavBar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    const pathname = usePathname();
    const router = useRouter();

    const isActive = (route: string) => pathname === route;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY >= 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavigation = (section: string, route: string) => {
        if (pathname === "/") {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        } else {
            router.push(route);
        }
    };

    return (
        <header
            className={clsx(
                'fixed top-0 w-full h-20 py-5 z-50 transition-all duration-300',
                scrolled
                    ? "bg-body/70 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
            )}
        >
            <nav className="relative h-full max-w-8xl px-6 sm:px-10 mx-auto flex justify-between items-center">

                <Link href="/" className={'relative h-20 w-20'}>
                    <Image
                        src='/logo.png'
                        alt='logo'
                        fill
                        className='object-contain h-auto w-auto cursor-pointer'
                        onClick={() => handleNavigation("hero", "/")}
                        loading='eager'
                    />
                </Link>

                <ul className="absolute-center text-subtitle flex gap-20">
                    {navigations.map(({id, name, section, route}) => (
                        <li key={id}>
                            <button
                                className={clsx(
                                    "px-3 py-2.5 h-full transition-colors duration-300",
                                    isActive(route)
                                        ? "text-white"
                                        : "text-subtitle hover:text-white"
                                )}
                                onClick={() => handleNavigation(section, route)}
                            >
                                {name}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-5 items-center">
                    <ul className="text-subtitle flex gap-5">
                        {socialLinks.map(({icon: Icon, id}) => (
                            <li key={id} className="text-2xl"><Icon/></li>
                        ))}
                    </ul>
                    <Link href={"booking"} className="capitalize button button--primary" >book now</Link>
                </div>
            </nav>
        </header>
    )
}
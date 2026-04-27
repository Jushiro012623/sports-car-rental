'use client'

import Image from "next/image";
import {navigations, socialLinks} from "@app/constants";
import {useEffect, useState} from "react";
import clsx from "clsx";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

export const NavBar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const handleNavigation = (section: string, route: string) => {
        setIsMenuOpen(false);

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
                'fixed top-0 w-full z-50 transition-all duration-300',
                scrolled || isMenuOpen
                    ? "bg-body/70 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
            )}
        >
            <nav className="relative h-20 max-w-8xl px-6 sm:px-10 mx-auto flex justify-between items-center">

                <Link href="/" className={'relative h-10 w-30 z-10'}>
                    <Image
                        src='/logo.svg'
                        alt='logo'
                        fill
                        className='object-contain h-auto w-auto cursor-pointer'
                        onClick={() => handleNavigation("hero", "/")}
                        loading='eager'
                    />
                </Link>

                <ul className="absolute-center text-subtitle hidden lg:flex gap-12 xl:gap-20">
                    {navigations.map(({id, name, section, route}) => (
                        <li key={id}>
                            <button
                                className={clsx(
                                    "px-3 py-2.5 h-full transition-colors duration-300 cursor-pointer",
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

                <div className="hidden lg:flex gap-5 items-center">
                    <ul className="text-subtitle flex gap-5">
                        {socialLinks.map(({icon: Icon, id}) => (
                            <li key={id} className="text-2xl"><Icon/></li>
                        ))}
                    </ul>
                    <Link href={"booking"} className="capitalize button button--primary">book now</Link>
                </div>

                <button
                    type="button"
                    className="z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((current) => !current)}
                >
                    <span
                        className={clsx(
                            "h-0.5 w-6 rounded-full bg-white transition-transform duration-300",
                            isMenuOpen && "translate-y-2 rotate-45"
                        )}
                    />
                    <span
                        className={clsx(
                            "h-0.5 w-6 rounded-full bg-white transition-opacity duration-300",
                            isMenuOpen && "opacity-0"
                        )}
                    />
                    <span
                        className={clsx(
                            "h-0.5 w-6 rounded-full bg-white transition-transform duration-300",
                            isMenuOpen && "-translate-y-2 -rotate-45"
                        )}
                    />
                </button>
            </nav>

            <div
                className={clsx(
                    "grid overflow-hidden px-6 transition-all duration-300 lg:hidden",
                    isMenuOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                )}
            >
                <div className="min-h-0">
                    <ul className="flex flex-col gap-2 border-t border-white/10 pt-5 text-subtitle">
                        {navigations.map(({id, name, section, route}) => (
                            <li key={id}>
                                <button
                                    className={clsx(
                                        "w-full rounded-xl px-4 py-3 text-left transition-colors duration-300",
                                        isActive(route)
                                            ? "bg-white/10 text-white"
                                            : "text-subtitle hover:bg-white/5 hover:text-white"
                                    )}
                                    onClick={() => handleNavigation(section, route)}
                                >
                                    {name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <ul className="text-subtitle flex gap-5">
                            {socialLinks.map(({icon: Icon, id}) => (
                                <li key={id} className="text-2xl"><Icon/></li>
                            ))}
                        </ul>

                        <Link
                            href={"booking"}
                            className="capitalize button button--primary w-full justify-center sm:w-auto"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            book now
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
import type {Metadata} from "next";
import "./globals.css";
import {Exo_2} from "next/font/google";
import {Footer, LenisSmoothScroll, NavBar} from "@app/components";
import clsx from "clsx";

const exo = Exo_2({
    subsets: ["latin"],
    variable: "--font-exo2",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Turismo",
    description: "Turismo Car Rental Homepage",
    icons: {
        icon: "./icon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={clsx(exo.variable, 'dark')}
        >
        <body className="font-exo bg-body text-white">
        <NavBar/>
        <LenisSmoothScroll />
        {children}
        <Footer />
        </body>
        </html>
    );
}

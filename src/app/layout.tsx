import type {Metadata} from "next";
import "./globals.css";
import {Exo_2} from "next/font/google";
import {NavBar} from "@app/components";

const exo = Exo_2({
    subsets: ["latin"],
    variable: "--font-exo2",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Infinity",
    description: "Infinity Car Rental Homepage",
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
            className={exo.variable}
        >
        <body className="font-exo bg-body text-white">
        <NavBar/>
        {children}
        </body>
        </html>
    );
}

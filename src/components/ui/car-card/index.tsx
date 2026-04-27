'use client'

import { FaAngleRight } from "react-icons/fa6";
import { Card, Chip } from "@heroui/react";
import clsx from "clsx";
import Image from "next/image";
import {CarInfo} from "@app/types";
import Link from "next/link";

export const CarCard = ({
                            src,
                            speedKmh,
                            accelerationSec,
                            horsepower,
                            rentPerDay,
                            model,
                        }: CarInfo) => {
    return (
        <Card className="min-h-96 overflow-hidden rounded-3xl relative group bg-transparent sm:min-h-112">

            {/* Background */}
            <Card.Content className="absolute inset-0">
                <Image
                    src={src}
                    alt={model}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                    priority
                />
            </Card.Content>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />

            {/* Header */}
            <Card.Header className="relative z-10 flex flex-row gap-2 p-4 sm:p-5">
                <Chip size="sm" className="sm:hidden w-fit px-3">{speedKmh} km/h</Chip>
                <Chip size="sm" className="sm:hidden w-fit px-3">{accelerationSec} sec</Chip>
                <Chip size="sm" className="sm:hidden w-fit px-3">{horsepower} hp</Chip>

                <Chip size="lg" className="hidden w-fit sm:inline-flex">{speedKmh} km/h</Chip>
                <Chip size="lg" className="hidden w-fit sm:inline-flex">{accelerationSec} sec</Chip>
                <Chip size="lg" className="hidden w-fit sm:inline-flex">{horsepower} hp</Chip>
            </Card.Header>

            {/* Footer */}
            <Card.Footer className={clsx(
                "relative z-10 mt-auto flex flex-col items-start gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5",
                "transition-all duration-500"
            )}>
                <div>
                    <div className="text-lg font-medium text-white sm:text-xl">
                        {model}
                    </div>
                    <div className="text-sm text-white/60 sm:text-md">
                        ${rentPerDay}/day
                    </div>
                </div>

                <Link href={"#"} className="capitalize button button--primary w-full justify-center tracking-tight sm:mt-5 sm:w-auto">
                    Learn More
                    <FaAngleRight />
                </Link>
            </Card.Footer>

        </Card>
    );
};
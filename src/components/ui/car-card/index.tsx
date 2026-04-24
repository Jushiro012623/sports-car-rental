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
        <Card className="col-span-2 min-h-112 overflow-hidden rounded-3xl relative group bg-transparent">

            {/* Background */}
            <Card.Content className="absolute inset-0">
                <Image
                    src={src}
                    alt={model}
                    fill
                    sizes={'100%'}
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                    priority
                />
            </Card.Content>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500" />

            {/* Header */}
            <Card.Header className="relative z-10 flex flex-row gap-2 p-5">
                <Chip size="lg">{speedKmh} km/h</Chip>
                <Chip size="lg">{accelerationSec} sec</Chip>
                <Chip size="lg">{horsepower} hp</Chip>
            </Card.Header>

            {/* Footer */}
            <Card.Footer className={clsx(
                "relative z-10 mt-auto flex items-center justify-between p-5",
                "transition-all duration-500"
            )}>
                <div>
                    <div className="text-xl font-medium text-white">
                        {model}
                    </div>
                    <div className="text-md text-white/60">
                        ${rentPerDay}/day
                    </div>
                </div>

                <Link href={"#"} className=" mt-5 capitalize button button--primary tracking-tight">
                    Learn More
                    <FaAngleRight />
                </Link>
            </Card.Footer>

        </Card>
    );
};
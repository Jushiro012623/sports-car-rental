import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {Button, Chip} from "@heroui/react";
import {FaAngleLeft} from "react-icons/fa6";
import {Section, TitleText} from "@app/components";
import {carModels} from "@app/constants";

type CarDetailsPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export const generateStaticParams = () => {
    return carModels.map((car) => ({
        slug: car.slug,
    }));
};

export const generateMetadata = async ({
                                           params,
                                       }: CarDetailsPageProps): Promise<Metadata> => {
    const {slug} = await params;
    const car = carModels.find((item) => item.slug === slug);

    if (!car) {
        return {
            title: "Car Not Found | Turismo",
        };
    }

    return {
        title: `${car.model} | Turismo`,
        description: car.overview,
    };
};

export default async function CarDetailsPage({params}: CarDetailsPageProps) {
    const {slug} = await params;
    const car = carModels.find((item) => item.slug === slug);

    if (!car) {
        notFound();
    }

    return (
        <Section className="min-h-screen w-full">
            <Section.Container className="pt-28 sm:pt-36 lg:pt-50">
                <Link
                    href="/cars"
                    className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                    <FaAngleLeft />
                    Back to cars
                </Link>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
                    <div className="relative min-h-96 overflow-hidden rounded-3xl sm:min-h-125">
                        <Image
                            src={car.src}
                            alt={car.model}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    <div>
                        <TitleText className="capitalize">
                            {car.model}
                        </TitleText>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                            {car.overview}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Chip size="lg">{car.speedKmh} km/h</Chip>
                            <Chip size="lg">{car.accelerationSec} sec</Chip>
                            <Chip size="lg">{car.horsepower} hp</Chip>
                        </div>

                        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
                            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                                Rent per day
                            </p>
                            <p className="mt-2 text-4xl font-semibold text-white">
                                ${car.rentPerDay}
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button variant="primary" className="w-full sm:w-auto">
                                Book this car
                            </Button>
                            <Link  href="/rental-terms" className="button w-full sm:w-auto">
                                View rental terms
                            </Link>
                        </div>
                    </div>
                </div>
            </Section.Container>
        </Section>
    );
}
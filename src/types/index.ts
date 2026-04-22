import {IconType} from "react-icons";

export type Testimonials = {
    id: number;
    message: string;
    name: string;
    imageSrc: string;
    stars: number;
}

export type RentalRequirements = {
    id: number;
    requirement: string;
    icon: IconType;
    description: string;
}

export type CarInfo = {
    id: number
    model: string;
    rentPerDay: string;
    speedKmh: number;
    src: string;
    accelerationSec: number;
    horsepower: number;
}



import {FaInstagram, FaWhatsapp} from "react-icons/fa6";
import {BsCarFrontFill, BsPatchCheck, BsPersonCircle, BsWallet2} from "react-icons/bs";

export const navigations = [
    {
        id: 1,
        name: "Cars",
        href: "cars"
    }, {
        id: 2,
        name: "Rental Terms",
        href: "rental-terms"
    }, {
        id: 3,
        name: "News",
        href: "news"
    }
]

export const socialLinks = [
    {
        id: 1,
        icon: FaInstagram,
        name: "instagram",
        href: "#"
    },
    {
        id: 2,
        icon: FaWhatsapp,
        name: "whatsapp",
        href: "#"
    }

]

export const carModels = [
    {
        id: 1,
        model: "Porsche 911 GT3 RS",
        rentPerDay: "1,100",
        speedKmh: 330,
        src: "/porsche-gt3-rs.png",
        accelerationSec: 3.2,
        horsepower: 520
    },
    {
        id: 2,
        model: "Nissan GT-R R35",
        rentPerDay: "1,300",
        speedKmh: 320,
        src: "/nissan-gtr-r35.png",
        accelerationSec: 2.7,
        horsepower: 570
    },
    {
        id: 3,
        model: "Ford Mustang GTD",
        rentPerDay: "1,000",
        speedKmh: 300,
        src: "/ford-mustang-gtd.png",
        accelerationSec: 2.6,
        horsepower: 486
    },
    {
        id: 4,
        model: "Mercedes-AMG GT 63 S E",
        rentPerDay: "1,420",
        speedKmh: 320,
        src: "/mercedes-amg-gt.png",
        accelerationSec: 3.2,
        horsepower: 816
    },
]

export const rentalRequirements = [
    {
        id: 1,
        requirement: "21 years",
        icon: BsPersonCircle,
        description: "Minimum age"
    },
    {
        id: 2,
        requirement: "2 Documents",
        icon: BsPatchCheck,
        description: "Passport and Driver's License"
    },
    {
        id: 3,
        requirement: "1 year",
        icon: BsCarFrontFill,
        description: "Driving experience"
    },
    {
        id: 4,
        requirement: "From 1000$",
        icon: BsWallet2,
        description: "Security deposit"
    },

]
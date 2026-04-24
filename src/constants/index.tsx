import {FaInstagram, FaWhatsapp} from "react-icons/fa6";
import {BsCarFrontFill, BsPatchCheck, BsPersonCircle, BsWallet2} from "react-icons/bs";
import {CarInfo, RentalRequirements, Testimonials} from "@app/types";

export const manufacturers = [
    "Acura",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroen",
    "Dodge",
    "Ferrari",
    "Fiat",
    "Ford",
    "GMC",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lamborghini",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Maserati",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MINI",
    "Mitsubishi",
    "Nissan",
    "Porsche",
    "Ram",
    "Rolls-Royce",
    "Subaru",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
];

export const carTypes = [
    "Sedan",
    "SUV",
    "Hatchback",
    "Coupe",
    "Convertible",
    "Wagon",
    "Pickup",
    "Van",
    "Luxury",
    "Sports",
    "Muscle",
]

export const transmissions = [
    "Automatic",
    "Manual",
    "Semi-Automatic",
    "CVT",
    "Dual-Clutch",
]

export const navigations = [
    {
        id: 1,
        name: "Cars",
        section: "cars",
        route: "/cars",
    },
    {
        id: 2,
        name: "Rental Terms",
        section: "rental-terms",
        route: "/rental-terms",
    },
    {
        id: 3,
        name: "News",
        section: "news",
        route: "/news-and-stories",
    }
];

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

export const carModels: CarInfo[] = [
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
        model: "Mercedes-AMG GT 63 SE",
        rentPerDay: "1,420",
        speedKmh: 320,
        src: "/mercedes-amg-gt.png",
        accelerationSec: 3.2,
        horsepower: 816
    },
    {
        id: 5,
        model: "Lamborghini Huracán",
        rentPerDay: "1,650",
        speedKmh: 320,
        src: "/huracan.png",
        accelerationSec: 3.6,
        horsepower: 602
    },
    {
        id: 6,
        model: "Dodge Challenger SRT Demon",
        rentPerDay: "1,520",
        speedKmh: 330,
        src: "/srt-demon.png",
        accelerationSec: 3.2,
        horsepower: 826
    },
]

export const rentalRequirements: RentalRequirements[] = [
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

export const clientTestimonials: Testimonials[] = [
    {
        id: 1,
        message: "The premium car I rented was impeccable. Smooth ride, elegant design, and absolutely reliable. The team made the entire process easy professional, and stress-free. I'll definitely come back for my next trip.",
        name: "Brian O'Conner",
        imageSrc: "/brianoconner.jpg",
        stars: 5
    },
    {
        id: 2,
        message: "I booked a premium car for a special occasion, and it exceeded all my expectations. The staff was very helpful and made everything simple, while the car itself turned the day into something truly memorable.",
        name: "Roman Pearce",
        imageSrc: "/romanpearce.jpg",
        stars: 5
    },
    {
        id: 3,
        message: "The selection of high-end cars was impressive, and the booking process was effortless. I felt safe and confident behind the wheel. A perfect choice for anyone wanting to experience true luxury on the road.",
        name: "Dominic Torreto",
        imageSrc: "/dom.jpeg",
        stars: 5
    }
]

export const rentalGuide = [
    {
        id: "01",
        guide: "Choose your car",
        description: "Pick the premium model that suits your plans."
    },
    {
        id: "02",
        guide: "Contact Us",
        description: "Confirm availability and request a free quote."
    },
    {
        id: "03",
        guide: "Confirm & Secure",
        description: "Send documents, pay deposit and we'll handle the rest."
    },
    {
        id: "04",
        guide: "Drive in Style",
        description: "We deliver your car straight to your door in just 90 minutes."
    },
]

export const rentalService = [
    {
        id: 1,
        service: "Fully insured, no surprises",
        description: "Your rental includes full coverage, so you can drive with complete peace of mind.",
        imgSrc: "/toyota-gt.png"
    },
    {
        id: 2,
        service: "Clear pricing, no hidden fees",
        description: "What you see is what you pay. No unexpected charges after your trip.",
        imgSrc: "/toyota-gt-seat.png"
    },
    {
        id: 3,
        service: "Car to your door in 90 minutes",
        description: "Skip the trip to the rental office and we'll bring the car straight to you.",
        imgSrc: "/toyota-gt-hood.png"
    },
    {
        id: 4,
        service: "24/7 customer support",
        description: "Whatever happens on the road, we're here to help at any time, day or night",
        imgSrc: "/toyota-gt-engine.png"
    },

]

export const rentalFAQ = [
    {
        title: "General",
        items: [
            {
                title: "How do I book a sports car?",
                content:
                    "Browse our available sports cars, choose your preferred vehicle, select your rental dates, and complete the booking with your payment details.",
            },
            {
                title: "Can I modify or cancel my booking?",
                content:
                    "Yes, bookings can be modified or canceled before the scheduled rental date, depending on the terms of your reservation.",
            },
            {
                title: "Are there mileage limits?",
                content:
                    "Some rentals include a daily mileage limit. Additional mileage may incur extra charges depending on the vehicle.",
            },
        ],
    },
    {
        title: "Licensing",
        items: [
            {
                title: "What are the requirements to rent a car?",
                content:
                    "Renters must meet the minimum age requirement, hold a valid driver's license, and provide a valid ID and payment method.",
            },
            {
                title: "Do I need a special license for sports cars?",
                content:
                    "No special license is required, but a valid driver's license is mandatory. Some high-performance vehicles may have stricter eligibility requirements.",
            },
        ],
    },
    {
        title: "Support",
        items: [
            {
                title: "How do I get support?",
                content:
                    "You can contact our support team through our website or via email for assistance with bookings, issues, or inquiries.",
            },
            {
                title: "What happens in case of damage or accident?",
                content:
                    "Please contact us immediately. Our team will guide you through the process, and coverage will depend on your rental agreement and insurance.",
            },
        ],
    },
];

export const newsAndStories = [
    {
        id: 1,
        headline: "Dodge Challenger SRT Demon joins our premium supercar collection",
        date: "February 20, 2026",
        imgSrc: "/dodge-demon.png",
        href: "#"
    },
    {
        id: 2,
        headline: "Experience the thrill: Lamborghini Huracán now available for rent",
        date: "March 5, 2026",
        imgSrc: "/huracan.png",
        href: "#"
    },
    {
        id: 3,
        headline: "Top 5 sports cars you need to drive at least once in your life",
        date: "March 18, 2026",
        imgSrc: "/top5-scar.png",
        href: "#"
    },
    {
        id: 4,
        headline: "The Gran Turismo World Series",
        date: "March 02, 2025",
        imgSrc: "/racing-2.png",
        href: "#"
    },
    {
        id: 5,
        headline: "The Bugatti W16 Mistral will be available soon",
        date: "September 18, 2024",
        imgSrc: "/mistral.png",
        href: "#"
    },
]

export const securityNav  = [
    {
        id: 1,
        name: "Terms",
        href: "terms-and-condition"
    }, {
        id: 2,
        name: "Privacy",
        href: "privacy-policy"
    }, {
        id: 3,
        name: "Cookies",
        href: "cookies"
    }
]
export const contacts  = [
    {
        id: 1,
        name: "Address",
        value: "012438 Anywhere Blvd, Los Angeles, USA"
    }, {
        id: 2,
        name: "Email",
        value: "ifinity.dev@gmail.com"
    }, {
        id: 3,
        name: "Phone",
        value: "09123094823"
    }
]
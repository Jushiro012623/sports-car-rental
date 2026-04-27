import {Avatar, Card} from "@heroui/react";
import {Testimonials} from "@app/types";
import {BsStarFill} from "react-icons/bs";


export const TestimonialCard = ({message, name, stars, imageSrc}: Omit<Testimonials, "id">) => {

    return (
        <Card className="bg-container p-5 sm:p-7 lg:p-10 w-full">
            <Card.Header>
                <Card.Title className={'flex gap-2 sm:gap-3'}>
                    {Array.from({length: stars}, (_, i) => i + 1)
                        .map((_, idx) => (
                            <BsStarFill className={"text-white"} size={18} key={idx}/>
                        ))}
                </Card.Title>
            </Card.Header>
            <Card.Content className={"text-sm sm:text-md leading-7 sm:leading-8 font-light text-subtitle mt-4 sm:mt-5"}>
                {message}
            </Card.Content>
            <Card.Footer className={"flex gap-3 mt-5"}>
                <Avatar className={'size-11 sm:size-12 bg-transparent'}>
                    <Avatar.Image
                        alt={name}
                        src={imageSrc}
                        loading={'lazy'}
                        className={'object-cover object-center'}
                    />
                    <Avatar.Fallback>{name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <div>
                    <h1 className="font-medium">{name}</h1>
                    <p className="text-sm text-subtitle/70">
                        Client
                    </p>
                </div>
            </Card.Footer>
        </Card>
    )
}
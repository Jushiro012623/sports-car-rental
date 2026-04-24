import {GiCutDiamond} from "react-icons/gi";
import {Chip} from "@heroui/react";

export const TestimonialEmblem = ({clientsCount, className}: {clientsCount: number,className?: string}) => {
    return (
        <Chip size="lg" variant="primary" className={className}>
            <GiCutDiamond size={15}/>
            <span className="ml-2">
                Chosen by more than {clientsCount} clients
            </span>
        </Chip>
    )
}
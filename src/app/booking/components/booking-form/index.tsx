'use client'
import {
    Button,
    ComboBox,
    DateField,
    InputGroup,
    Label,
    ListBox,
    TextField
} from "@heroui/react";
import {FaCar, FaEnvelope} from "react-icons/fa6";
import {FaPhone} from "react-icons/fa6";
import {carModels} from "@app/constants";
import {CarInfo} from "@app/types";
import {Fragment, useSyncExternalStore} from "react";


const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export const BookingForm = () => {
    const mounted = useSyncExternalStore(
        subscribe,
        getClientSnapshot,
        getServerSnapshot,
    );

    if (!mounted) {
        return null;
    }

    return (
        <Fragment>
            <TextField className="w-full max-w-md" name="full_name">
                <Label className={"ml-2 mb-1"}>Full Name</Label>
                <InputGroup className={"rounded-full"}>
                    <InputGroup.Prefix>
                        <FaEnvelope className="size-4 text-muted ml-3"/>
                    </InputGroup.Prefix>
                    <InputGroup.Input className="w-full min-w-0 px-4 py-4 sm:px-5" placeholder="Your Full Name"/>
                </InputGroup>
            </TextField>

            <TextField className="w-full max-w-md" name="phone_number">
                <Label className={"ml-2 mb-1"}>Phone Number</Label>
                <InputGroup className={"rounded-full"}>
                    <InputGroup.Prefix>
                        <FaPhone className="size-4 text-muted ml-3"/>
                    </InputGroup.Prefix>
                    <InputGroup.Input className="w-full min-w-0 rounded-full px-4 py-4 sm:px-5" placeholder="Your Phone Number"/>
                </InputGroup>
            </TextField>

            <ComboBox className="w-full max-w-md">
                <Label className={"ml-2 mb-1"}>Choose Your Ride</Label>
                <ComboBox.InputGroup>
                    <InputGroup className={"rounded-full w-full"}>
                        <InputGroup.Prefix>
                            <FaCar className="size-4 text-muted ml-3"/>
                        </InputGroup.Prefix>
                        <InputGroup.Input className="w-full min-w-0 rounded-full px-4 py-4 sm:px-5" placeholder="Choose Your Ride"/>
                    </InputGroup>
                    <ComboBox.Trigger className={"mr-3"}/>
                </ComboBox.InputGroup>
                <ComboBox.Popover>
                    <ListBox>
                        {carModels.map((ride: CarInfo) => (
                            <ListBox.Item key={ride.id} id={ride.id} textValue={ride.model}>
                                {ride.model}
                                <ListBox.ItemIndicator/>
                            </ListBox.Item>
                        ))}
                    </ListBox>
                </ComboBox.Popover>
            </ComboBox>

            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <DateField className="w-full sm:w-1/2" name="pick_up_date">
                    <Label className={"ml-2 mb-1"}>Pick-up Date</Label>
                    <DateField.Group className={'px-2 py-6.5 rounded-full'}>
                        <DateField.Input className="w-full min-w-0 rounded-full px-4 py-4 sm:px-5">{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
                <DateField className="w-full mt-3 md:mt-0 sm:w-1/2" name="drop_off_date">
                    <Label className={"ml-2 mb-1"}>Drop-off Date</Label>
                    <DateField.Group className={'px-2 py-6.5 rounded-full'}>
                        <DateField.Input className="w-full min-w-0 rounded-full px-4 py-4 sm:px-5">{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
            </div>

            <Button type={'submit'} className={"w-full max-w-md mt-7 text-base px-2 py-5.5"}>Book Now</Button>
        </Fragment>
    )
}
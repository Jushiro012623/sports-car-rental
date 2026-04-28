'use client'
import {
    Button,
    ComboBox,
    DateField, Description, Form,
    InputGroup,
    Label,
    ListBox, Spinner,
    TextField,
    toast
} from "@heroui/react";
import {FaCar, FaEnvelope} from "react-icons/fa6";
import {FaPhone} from "react-icons/fa6";
import {carModels} from "@app/constants";
import {CarInfo} from "@app/types";
import React, {useState, useTransition} from "react";
import {sendBookingEmailAction} from "@app/app/booking/actions/send-booking-email";


export const BookingForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        startTransition(async () => {
            const result = await sendBookingEmailAction(formData);

            if (!result.success) {
                setErrors(result.errors ?? {});
                toast.danger(result.message);
                return;
            }

            setErrors({});
            toast.success(result.message);
        });
    };

    return (
        <Form onSubmit={handleSubmit}
              className={"mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-6 rounded-3xl bg-container p-5 sm:gap-8 sm:p-8 lg:gap-10 lg:p-10"}>
            <TextField className="w-full max-w-md" name="full_name">
                <Label className={"ml-2 mb-1"}>Full Name</Label>
                <InputGroup className={"rounded-full"}>
                    <InputGroup.Prefix>
                        <FaEnvelope className="size-4 text-muted ml-3"/>
                    </InputGroup.Prefix>
                    <InputGroup.Input className="w-full min-w-0 px-4 py-4 sm:px-5" placeholder="Your Full Name"/>
                </InputGroup>
                {errors.fullName && <Description className={"text-danger"}>{errors.fullName}</Description>}
            </TextField>

            <TextField className="w-full max-w-md" name="phone_number">
                <Label className={"ml-2 mb-1"}>Phone Number</Label>
                <InputGroup className={"rounded-full"}>
                    <InputGroup.Prefix>
                        <FaPhone className="size-4 text-muted ml-3"/>
                    </InputGroup.Prefix>
                    <InputGroup.Input className="w-full min-w-0  px-4 py-4 sm:px-5"
                                      placeholder="Your Phone Number"/>
                </InputGroup>
                {errors.phoneNumber && <Description className={"text-danger"}>{errors.phoneNumber}</Description>}
            </TextField>

            <ComboBox className="w-full max-w-md" name="ride_id">
                <Label className={"ml-2 mb-1"}>Choose Your Ride</Label>
                <ComboBox.InputGroup>
                    <InputGroup className={"rounded-full w-full"}>
                        <InputGroup.Prefix>
                            <FaCar className="size-4 text-muted ml-3"/>
                        </InputGroup.Prefix>
                        <InputGroup.Input className="w-full min-w-0 rounded-full px-4 py-4 sm:px-5"
                                          placeholder="Choose Your Ride"/>
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
                {errors.rideId && <Description className={"text-danger"}>{errors.rideId}</Description>}
            </ComboBox>

            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <DateField className="w-full sm:w-1/2" name="pick_up_date">
                    <Label className={"ml-2 mb-1"}>Pick-up Date</Label>
                    <DateField.Group className={'px-2 py-6.5 rounded-full'}>
                        <DateField.Input className="w-full min-w-0 rounded-full px-4 py-4 sm:px-5">{(segment) =>
                            <DateField.Segment segment={segment}/>}</DateField.Input>
                    </DateField.Group>
                    {errors.pickUpDate && <Description className={"text-danger"}>{errors.pickUpDate}</Description>}
                </DateField>
                <DateField className="w-full mt-3 md:mt-0 sm:w-1/2" name="drop_off_date">
                    <Label className={"ml-2 mb-1"}>Drop-off Date</Label>
                    <DateField.Group className={'px-2 py-6.5 rounded-full'}>
                        <DateField.Input className="w-full min-w-0 rounded-full px-4 py-4 sm:px-5">{(segment) =>
                            <DateField.Segment segment={segment}/>}</DateField.Input>
                    </DateField.Group>
                    {errors.dropOffDate && <Description className={"text-danger"}>{errors.dropOffDate}</Description>}
                </DateField>
            </div>

            <Button
                isDisabled={isPending}
                isPending={isPending}
                type={'submit'}
                className={"w-full max-w-md mt-7 text-base px-2 py-5.5"}
            >
                {({isPending}) => (
                    <>
                        {isPending ? <Spinner color="current" size="sm" /> : null}
                        {isPending ? "Submitting..." : "Submit"}
                    </>
                )}
            </Button>
        </Form>
    )
}
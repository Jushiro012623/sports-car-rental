'use client'
import {
    Button,
    ComboBox,
    DateField, Form,
    InputGroup,
    Label,
    ListBox, Spinner,
    TextField, toast
} from "@heroui/react";
import {FaCar, FaEnvelope} from "react-icons/fa6";
import {FaPhone} from "react-icons/fa6";
import {carModels} from "@app/constants";
import {CarInfo} from "@app/types";
import React, {useState, useSyncExternalStore} from "react";


const subscribe = () => () => {
};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export const BookingForm = () => {

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const mounted = useSyncExternalStore(
        subscribe,
        getClientSnapshot,
        getServerSnapshot,
    );

    if (!mounted) {
        return null;
    }

    const onSubmitAction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsSubmitting(true)

        const loadingId = toast("Submitting...", {
            isLoading: true,
            timeout: 0,
        });
        setTimeout(() => {
            toast.close(loadingId);
            toast.success("Booking submitting", {
                description: "Your booking has been submitted successfully",
            });
            setIsSubmitting(false)
        }, 2500)

    }

    return (
        <Form onSubmit={onSubmitAction}
              className={"mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-6 rounded-3xl bg-container p-5 sm:gap-8 sm:p-8 lg:gap-10 lg:p-10"}>
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
                    <InputGroup.Input className="w-full min-w-0 rounded-full px-4 py-4 sm:px-5"
                                      placeholder="Your Phone Number"/>
                </InputGroup>
            </TextField>

            <ComboBox className="w-full max-w-md">
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
            </ComboBox>

            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <DateField className="w-full sm:w-1/2" name="pick_up_date">
                    <Label className={"ml-2 mb-1"}>Pick-up Date</Label>
                    <DateField.Group className={'px-2 py-6.5 rounded-full'}>
                        <DateField.Input className="w-full min-w-0 rounded-full px-4 py-4 sm:px-5">{(segment) =>
                            <DateField.Segment segment={segment}/>}</DateField.Input>
                    </DateField.Group>
                </DateField>
                <DateField className="w-full mt-3 md:mt-0 sm:w-1/2" name="drop_off_date">
                    <Label className={"ml-2 mb-1"}>Drop-off Date</Label>
                    <DateField.Group className={'px-2 py-6.5 rounded-full'}>
                        <DateField.Input className="w-full min-w-0 rounded-full px-4 py-4 sm:px-5">{(segment) =>
                            <DateField.Segment segment={segment}/>}</DateField.Input>
                    </DateField.Group>
                </DateField>
            </div>

            <Button
                isDisabled={isSubmitting}
                isPending={isSubmitting}
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
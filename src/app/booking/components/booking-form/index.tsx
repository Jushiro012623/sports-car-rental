'use client'
import {
    Button,
    Calendar,
    ComboBox,
    DateField,
    DatePicker,
    InputGroup,
    Label,
    ListBox,
    TextField
} from "@heroui/react";
import {FaCar, FaEnvelope} from "react-icons/fa6";
import {FaPhone} from "react-icons/fa6";
import {carModels} from "@app/constants";
import {CarInfo} from "@app/types";
import {Fragment} from "react";

export const BookingForm = () => {
    return (
        <Fragment>
            <TextField className="w-full max-w-md" name="email">
                <Label className={"ml-2 mb-1"}>Full Name</Label>
                <InputGroup className={"rounded-full"}>
                    <InputGroup.Prefix>
                        <FaEnvelope className="size-4 text-muted ml-3"/>
                    </InputGroup.Prefix>
                    <InputGroup.Input className="w-full max-w-md px-5 py-4 " placeholder="Your Full Name"/>
                </InputGroup>
            </TextField>

            <TextField className="w-full max-w-md" name="email">
                <Label className={"ml-2 mb-1"}>Phone Number</Label>
                <InputGroup className={"rounded-full"}>
                    <InputGroup.Prefix>
                        <FaPhone className="size-4 text-muted ml-3"/>
                    </InputGroup.Prefix>
                    <InputGroup.Input className="w-full max-w-md px-5 py-4 rounded-full" placeholder="Your Phone Number"/>
                </InputGroup>
            </TextField>

            <ComboBox className="w-full max-w-md">
                <Label className={"ml-2 mb-1"}>Choose Your Ride</Label>
                <ComboBox.InputGroup>
                    <InputGroup className={"rounded-full w-full"}>
                        <InputGroup.Prefix>
                            <FaCar className="size-4 text-muted ml-3"/>
                        </InputGroup.Prefix>
                        <InputGroup.Input className="w-full max-w-md px-5 py-4 rounded-full" placeholder="Choose Your Ride"/>
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

            <div className="w-full max-w-md gap-3 flex">
                <DatePicker className="w-64" name="date">
                    <Label className={"ml-2 mb-1"}>Pick-up Date</Label>
                    <DateField.Group className={"px-2 py-6.5 rounded-full"}>
                        <DateField.Input >{(segment) => <DateField.Segment segment={segment}/>}</DateField.Input>
                        <DateField.Suffix>
                            <DatePicker.Trigger>
                                <DatePicker.TriggerIndicator/>
                            </DatePicker.Trigger>
                        </DateField.Suffix>
                    </DateField.Group>
                    <DatePicker.Popover>
                        <Calendar aria-label="Event date">
                            <Calendar.Header>
                                <Calendar.YearPickerTrigger>
                                    <Calendar.YearPickerTriggerHeading/>
                                    <Calendar.YearPickerTriggerIndicator/>
                                </Calendar.YearPickerTrigger>
                                <Calendar.NavButton slot="previous"/>
                                <Calendar.NavButton slot="next"/>
                            </Calendar.Header>
                            <Calendar.Grid>
                                <Calendar.GridHeader>
                                    {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                                </Calendar.GridHeader>
                                <Calendar.GridBody>{(date) => <Calendar.Cell date={date}/>}</Calendar.GridBody>
                            </Calendar.Grid>
                            <Calendar.YearPickerGrid>
                                <Calendar.YearPickerGridBody>
                                    {({year}) => <Calendar.YearPickerCell year={year}/>}
                                </Calendar.YearPickerGridBody>
                            </Calendar.YearPickerGrid>
                        </Calendar>
                    </DatePicker.Popover>
                </DatePicker>

                <DatePicker className="w-64" name="date">
                    <Label className={"ml-2 mb-1"}>Drop-off Date</Label>
                    <DateField.Group  className={'px-2 py-6.5 rounded-full'}  >
                        <DateField.Input  >{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        <DateField.Suffix>
                            <DatePicker.Trigger>
                                <DatePicker.TriggerIndicator />
                            </DatePicker.Trigger>
                        </DateField.Suffix>
                    </DateField.Group>
                    <DatePicker.Popover>
                        <Calendar aria-label="Event date">
                            <Calendar.Header>
                                <Calendar.YearPickerTrigger>
                                    <Calendar.YearPickerTriggerHeading />
                                    <Calendar.YearPickerTriggerIndicator />
                                </Calendar.YearPickerTrigger>
                                <Calendar.NavButton slot="previous" />
                                <Calendar.NavButton slot="next" />
                            </Calendar.Header>
                            <Calendar.Grid>
                                <Calendar.GridHeader>
                                    {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                                </Calendar.GridHeader>
                                <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                            </Calendar.Grid>
                            <Calendar.YearPickerGrid>
                                <Calendar.YearPickerGridBody>
                                    {({year}) => <Calendar.YearPickerCell year={year} />}
                                </Calendar.YearPickerGridBody>
                            </Calendar.YearPickerGrid>
                        </Calendar>
                    </DatePicker.Popover>
                </DatePicker>
            </div>

            <Button type={'submit'} className={"w-full max-w-md text-base px-2 py-6.5"}>Book Now</Button>
        </Fragment>
    )
}
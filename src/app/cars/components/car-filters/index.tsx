'use client'

import {carTypes, manufacturers, transmissions} from "@app/constants";
import {Button, Form} from "@heroui/react";
import {FilterComboBox} from "@app/components";
import {FaRegTrashCan} from "react-icons/fa6";

export type CarFilterValues = {
    manufacturer: string;
    carType: string;
    transmission: string;
};

type CarFiltersProps = {
    filters: CarFilterValues;
    onFiltersChangeAction: (filters: CarFilterValues) => void;
};

export const CarFilters = ({
                               filters,
                               onFiltersChangeAction,
                           }: CarFiltersProps) => {
    const updateFilter = <Key extends keyof CarFilterValues>(
        key: Key,
        value: CarFilterValues[Key],
    ) => {
        onFiltersChangeAction({
            ...filters,
            [key]: value,
        });
    };

    const clearFilters = () => {
        onFiltersChangeAction({
            manufacturer: "",
            carType: "",
            transmission: "",
        });
    };

    return (
        <Form
            className="mt-10 grid w-full grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 lg:mt-15 lg:flex lg:items-center lg:justify-center">
            <FilterComboBox
                placeholder="Manufacturers"
                options={manufacturers}
                value={filters.manufacturer}
                onChangeAction={(value) => updateFilter("manufacturer", value)}
            />

            <FilterComboBox
                placeholder="Car Type"
                options={carTypes}
                value={filters.carType}
                onChangeAction={(value) => updateFilter("carType", value)}
            />

            <FilterComboBox
                placeholder="Transmission"
                options={transmissions}
                value={filters.transmission}
                onChangeAction={(value) => updateFilter("transmission", value)}
            />

            <Button
                type="button"
                variant="tertiary"
                className="w-full sm:col-span-2 lg:w-auto size-13! rounded-full"
                onPress={clearFilters}
                isIconOnly
            >
                <FaRegTrashCan className={"text-danger"}/>
            </Button>
        </Form>
    );
};
'use client'

import { carTypes, manufacturers, transmissions } from "@app/constants";
import { Form } from "@heroui/react";
import {FilterComboBox} from "@app/components";

export const CarFilters = () => {
    return (
        <Form className="mt-10 grid w-full grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 lg:mt-15 lg:flex lg:items-center lg:justify-center">
            <FilterComboBox
                placeholder="Manufacturers"
                options={manufacturers}
            />

            <FilterComboBox
                placeholder="Car Type"
                options={carTypes}
            />

            <FilterComboBox
                placeholder="Transmission"
                options={transmissions}
            />
        </Form>
    );
};
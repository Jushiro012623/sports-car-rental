'use client'

import { carTypes, manufacturers, transmissions } from "@app/constants";
import { Form } from "@heroui/react";
import {FilterComboBox} from "@app/components";

export const CarFilters = () => {
    return (
        <Form className="flex items-center justify-center mt-15 gap-3">
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
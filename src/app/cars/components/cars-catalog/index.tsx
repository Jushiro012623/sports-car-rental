'use client'

import {useMemo, useState} from "react";
import {Button} from "@heroui/react";
import clsx from "clsx";
import {CarCard} from "@app/components";
import {CarInfo} from "@app/types";
import {CarFilters, CarFilterValues} from "@app/app/cars/components";

type CarsCatalogProps = {
    cars: CarInfo[];
};

const initialFilters: CarFilterValues = {
    manufacturer: "",
    carType: "",
    transmission: "",
};

export const CarsCatalog = ({cars}: CarsCatalogProps) => {
    const [filters, setFilters] = useState<CarFilterValues>(initialFilters);

    const filteredCars = useMemo(() => {
        return cars.filter((car) => {
            const matchesManufacturer =
                !filters.manufacturer || car.manufacturer === filters.manufacturer;

            const matchesCarType =
                !filters.carType || car.carType === filters.carType;

            const matchesTransmission =
                !filters.transmission || car.transmission === filters.transmission;

            return matchesManufacturer && matchesCarType && matchesTransmission;
        });
    }, [cars, filters]);

    return (
        <>
            <CarFilters filters={filters} onFiltersChangeAction={setFilters} />

            {filteredCars.length > 0 ? (
                <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
                    {filteredCars.map((car) => (
                        <CarCard key={car.id} {...car} />
                    ))}
                </div>
            ) : (
                <p className="mt-12 text-center text-white/60 sm:mt-16 lg:mt-20">
                    No cars match the selected filters.
                </p>
            )}

            <div
                className={clsx(
                    "flex w-full justify-center pt-10 sm:pt-12 lg:pt-15",
                    filteredCars.length === 0 && "hidden",
                )}
            >
                <Button variant="tertiary" className="w-full sm:w-auto">
                    Show More Cars
                </Button>
            </div>
        </>
    );
};
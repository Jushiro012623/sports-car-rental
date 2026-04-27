'use client'

import { ComboBox, Input, ListBox } from "@heroui/react";
import clsx from "clsx";

type FilterComboBoxProps = {
    placeholder: string;
    options: string[];
};

export const FilterComboBox = ({
   placeholder,
   options,
}: FilterComboBoxProps) => {
    return (
        <ComboBox className="w-full lg:w-max">
            <ComboBox.InputGroup className="w-full lg:w-max">
                <Input
                    placeholder={placeholder}
                    className={clsx(
                        "w-full min-w-0 rounded-full px-5 py-4 lg:w-max lg:min-w-37.5"
                    )}
                />
                <ComboBox.Trigger className={"mr-2"}/>
            </ComboBox.InputGroup>

            <ComboBox.Popover className="w-full lg:w-max">
                <ListBox
                    className="max-h-60 overflow-y-auto whitespace-nowrap"
                    onWheel={(e) => e.stopPropagation()}
                >
                    {options.map((item) => (
                        <ListBox.Item
                            key={item}
                            id={item.toLowerCase()}
                            textValue={item}
                            className="whitespace-nowrap"
                        >
                            {item}
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    ))}
                </ListBox>
            </ComboBox.Popover>
        </ComboBox>
    );
};
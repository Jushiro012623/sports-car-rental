'use client'

import { ComboBox, Input, ListBox } from "@heroui/react";
import clsx from "clsx";

type FilterComboBoxValue = string;

type FilterComboBoxProps = {
    placeholder: string;
    options: string[];
    value: FilterComboBoxValue;
    onChangeAction: (value: FilterComboBoxValue) => void;
};

export const FilterComboBox = ({
                                   placeholder,
                                   options,
                                   value,
                                   onChangeAction
                               }: FilterComboBoxProps) => {
    return (
        <ComboBox className="w-full lg:w-max">
            <ComboBox.InputGroup className="w-full lg:w-max">
                <Input
                    placeholder={placeholder}
                    value={value}
                    onChange={(event) => onChangeAction(event.target.value)}
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
                    onAction={(key) => onChangeAction(String(key))}
                >
                    {options.map((item) => (
                        <ListBox.Item
                            key={item}
                            id={item}
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
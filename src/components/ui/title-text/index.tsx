import {PropsWithChildren} from "react";
import clsx from "clsx";


export const TitleText = ({children, className}: PropsWithChildren<{ className?: string }>) => (
    <h1 className={clsx(
        'text-6xl font-semibold',
        className
    )}>{children}</h1>
)
import clsx from "clsx";
import {PropsWithChildren} from "react";

type SectionProp = PropsWithChildren<{ className?: string, id?: string }>
type ContainerProp = SectionProp

const SectionRoot = ({ id, children, className }: SectionProp) => {
    return (
        <section id={id} className={clsx("", className)}>
            {children}
        </section>
    );
};

const Container = ({ children, className }: ContainerProp) => {
    return (
        <div className={clsx("max-w-8xl mx-auto px-6 sm:px-10", className)}>
            {children}
        </div>
    );
};

type SectionComponent = typeof SectionRoot & {
    Container: typeof Container;
};

export const Section = SectionRoot as SectionComponent;

Section.Container = Container;
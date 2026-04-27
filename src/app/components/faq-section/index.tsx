import {Section, TitleText} from "@app/components";
import {Accordion} from "@heroui/react";
import {rentalFAQ} from "@app/constants";

export const FAQSection = () => {
    return (
        <Section className={'w-full '}>
            <Section.Container className={"pt-28 sm:pt-36 lg:pt-50 flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-16"}>
                <TitleText className={"max-w-xl"}>Frequently Asked Question</TitleText>
                <div className={"w-full max-w-4xl space-y-8 sm:space-y-10"}>
                    {rentalFAQ.map((category) => (
                        <div key={category.title} className={'w-full'}>
                            <p className="text-sm sm:text-md mb-2 font-medium text-muted">{category.title}</p>
                            <Accordion className="w-full" variant="surface">
                                {category.items.map((item, index) => (
                                    <Accordion.Item key={index}>
                                        <Accordion.Heading>
                                            <Accordion.Trigger>
                                                {item.title}
                                                <Accordion.Indicator />
                                            </Accordion.Trigger>
                                        </Accordion.Heading>
                                        <Accordion.Panel>
                                            <Accordion.Body>{item.content}</Accordion.Body>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </Section.Container>
        </Section>
    )
}
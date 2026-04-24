import {Section, TitleText} from "@app/components";
import {Accordion} from "@heroui/react";
import {rentalFAQ} from "@app/constants";

export const FAQSection = () => {
    return (
        <Section className={'w-full '}>
            <Section.Container className={"pt-50 flex justify-between"}>
                <TitleText className={"max-w-xl"}>Frequently Asked Question</TitleText>
                <div className={"w-4xl max-w-4xl space-y-10"}>
                    {rentalFAQ.map((category) => (
                        <div key={category.title} className={'w-full'}>
                            <p className="text-md mb-2 font-medium text-muted">{category.title}</p>
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
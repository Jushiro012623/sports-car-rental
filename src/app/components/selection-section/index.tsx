import {CarCard, Section, TitleText} from "@app/components";
import {carModels} from "@app/constants";
import {CarInfo} from "@app/types";


export const SelectionSection = () => {
    return (
        <Section  id="cars" className="min-h-screen w-full">
            <Section.Container className="pt-50">
                <TitleText className={'capitalize text-center'}>choose your ride</TitleText>
                <div className="grid grid-cols-4 gap-5 mt-20">
                    {carModels.slice(0,4).map((car: CarInfo) => (
                        <CarCard key={car.id} {...car} />
                    ))}
                </div>
            </Section.Container>
        </Section>
    )
}
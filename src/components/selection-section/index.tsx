import {CarCard, TitleText} from "@app/components";
import {carModels} from "@app/constants";
import {CarInfo} from "@app/types";


export const SelectionSection = () => {
    return (
        <section className="min-h-screen w-full">
            <div className="max-w-8xl pt-50 mx-auto px-6 sm:px-10">
                <TitleText className={'capitalize text-center'}>choose your ride</TitleText>
                <div className="grid grid-cols-4 gap-10 mt-20">
                    {carModels.map((car: CarInfo) => (
                        <CarCard key={car.id} {...car} />
                    ))}
                </div>
            </div>
        </section>
    )
}
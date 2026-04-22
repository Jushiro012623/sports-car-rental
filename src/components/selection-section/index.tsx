import {CarCard} from "@app/components";
import {carModels} from "@app/constants";


export const SelectionSection = () => {
    return (
        <section className="min-h-screen max-w-8xl pt-50 mx-auto px-6 sm:px-10">
            <h1 className={'text-5xl capitalize text-center'}>choose your ride</h1>
            <div className="grid grid-cols-4 gap-10 mt-20">
                {carModels.map((car) => (
                    <CarCard key={car.id} {...car} />
                ))}
            </div>
        </section>
    )
}
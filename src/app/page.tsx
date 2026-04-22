import {HeroSection, RentalTermsSection, SelectionSection, TestimonialSection, GuideSection, ServiceSection, FAQSection} from "@app/components";

export default function Home() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            <HeroSection/>
            <SelectionSection/>
            <RentalTermsSection/>
            <TestimonialSection />
            <GuideSection />
            <ServiceSection />
            <FAQSection />
        </main>
    );
}


import {
    HeroSection,
    RentalTermsSection,
    SelectionSection,
    TestimonialSection,
    GuideSection,
    NewsAndStoriesSection,
    ServiceSection,
    FAQSection,
    BookSection
} from "@app/app/components";

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
            <NewsAndStoriesSection />
            <BookSection />
        </main>
    );
}

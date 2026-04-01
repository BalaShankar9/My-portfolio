import { Hero } from "@/components/hero/hero";
import { ProductsSection } from "@/components/projects/products-section";
import { ProcessSection } from "@/components/process/process-section";
import { JourneySection } from "@/components/journey/journey-section";
import { StackSection } from "@/components/stack/stack-section";
import { AboutSection } from "@/components/about/about-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProductsSection />
        <ProcessSection />
        <JourneySection />
        <StackSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

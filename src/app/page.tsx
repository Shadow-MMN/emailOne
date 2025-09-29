import CTA from "@/components/CTA";
import FAQsSection from "@/components/FAQsSection";

import Header from "@/components/Header";
import OverviewSection from "@/components/OverviewSection";
import PricingSection from "@/components/PricingSection";
import TemplateSection from "@/components/TemplateSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8 md:gap-16 px-4 md:px-8 lg:px-0">
      <Header />
      <TemplateSection />
      <OverviewSection />
      <PricingSection />
      <Testimonials />
      <FAQsSection />
      <CTA />
    </main>
  );
}

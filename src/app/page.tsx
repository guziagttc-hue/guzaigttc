import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { AdmissionSection } from '@/components/sections/admission-section';
import { CoursesSection } from '@/components/sections/courses-section';
import { FaqSection } from '@/components/sections/faq-section';
import { FeaturesAndServicesSection } from '@/components/sections/features-and-services-section';
import { TeachersSection } from '@/components/sections/teachers-section';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto space-y-16 px-4 py-16 sm:px-6 lg:px-8 md:space-y-24">
        <CoursesSection />
        <FeaturesAndServicesSection />
        <TeachersSection />
        <FaqSection />
        <AdmissionSection />
      </main>
      <Footer />
    </>
  );
}

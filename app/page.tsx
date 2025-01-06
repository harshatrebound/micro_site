import Hero from '@/components/home/Hero';
import KeyBenefits from '@/components/home/KeyBenefits';
import FeaturedActivities from '@/components/home/FeaturedActivities';
import CompanyLogos from '@/components/home/CompanyLogos';
import CTASection from '@/components/home/CTASection';
import ContactForm from '@/components/home/ContactForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <CompanyLogos />
      <KeyBenefits />
      <FeaturedActivities />
      <CTASection />
      <ContactForm />
    </main>
  );
} 
import { Mail, Phone } from 'lucide-react';
import { SectionWrapper } from '../section-wrapper';

export function Footer() {
  return (
    <SectionWrapper
      id="contact"
      className="bg-[hsl(var(--dark-blue-hsl))] text-center text-white"
    >
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold">গুজিয়া টেকনিক্যাল ট্রেনিং সেন্টার</h2>
        <p className="mt-2 text-lg">স্থান: গুজিয়া, শিবগঞ্জ, বগুড়া।</p>
        <div className="my-8 space-y-3 text-lg">
          <a
            href="tel:01733093962"
            className="flex items-center justify-center gap-3 transition-colors hover:text-primary"
          >
            <Phone className="h-5 w-5" />
            <span>০১৭৩৩-০৯৩৯৬২</span>
          </a>
          <a
            href="tel:01723128662"
            className="flex items-center justify-center gap-3 transition-colors hover:text-primary"
          >
            <Phone className="h-5 w-5" />
            <span>০১৭২৩-১২৮৬৬২</span>
          </a>
          <a
            href="mailto:guzia.ttc2024@gmail.com"
            className="flex items-center justify-center gap-3 transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
            <span>guzia.ttc2024@gmail.com</span>
          </a>
        </div>
        <small>
          © ২০২৪ গুজিয়া টেকনিক্যাল ট্রেনিং সেন্টার | All Rights Reserved
        </small>
      </div>
    </SectionWrapper>
  );
}

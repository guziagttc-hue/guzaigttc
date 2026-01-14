import { Mail, MapPin, Phone } from 'lucide-react';
import { SectionWrapper } from '../section-wrapper';

export function Footer() {
  return (
    <SectionWrapper
      id="contact"
      className="bg-[hsl(var(--dark-blue-hsl))] text-center text-white"
    >
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold">গুজিয়া টেকনিক্যাল ট্রেনিং সেন্টার</h2>
        <a
          href="https://maps.app.goo.gl/aeSG1XPNRGks84Bt9"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-lg inline-flex items-center gap-2 transition-colors hover:text-primary"
        >
          <MapPin className="h-5 w-5" />
          <span>স্থান: গুজিয়া, শিবগঞ্জ, বগুড়া।</span>
        </a>
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
            href="mailto:guziagttc@gmail.com"
            className="flex items-center justify-center gap-3 transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
            <span>guziagttc@gmail.com</span>
          </a>
        </div>
        <small>
          © ২০২৪ গুজিয়া টেকনিক্যাল ট্রেনিং সেন্টার | All Rights Reserved
        </small>
      </div>
    </SectionWrapper>
  );
}

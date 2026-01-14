import { MapPin } from 'lucide-react';
import { SectionWrapper } from '../section-wrapper';

export function Header() {
  return (
    <SectionWrapper
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary to-accent pt-24 pb-32 text-center text-white"
    >
      <div className="relative z-10">
        <p className="mb-2 text-lg">বিসমিল্লাহির রাহমানির রাহিম</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          গুজিয়া টেকনিক্যাল ট্রেনিং সেন্টার
        </h1>
        <p className="mt-4 text-xl">
          কারিগরি শিক্ষা নিলে দেশ-বিদেশে কর্ম মিলে...
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-2">
          <MapPin className="h-5 w-5" />
          <span>গুজিয়া, শিবগঞ্জ, বগুড়া</span>
        </div>
      </div>
      <div className="curved-header" />
    </SectionWrapper>
  );
}

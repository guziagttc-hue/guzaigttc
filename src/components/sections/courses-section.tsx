import { CustomList } from '../custom-list';
import { SectionWrapper } from '../section-wrapper';

const longTermCourses = [
  'কম্পিউটার অফিস অ্যাপ্লিকেশন',
  'মোটর ড্রাইভিং কাম অটোমেকানিক্স',
  'ইলেকট্রিক্যাল হাউজওয়্যারিং',
  'প্লাম্বিং এন্ড পাইপ ফিটিং',
  'মেশিনারিজ এন্ড রড বাইন্ডিং',
];

const shortTermCourses = [
  'মোটর ড্রাইভিং (হালকা) - ৪৫ দিন',
  'বুটিক - ২ মাস',
  'কম্পিউটার অফিস অ্যাপ্লিকেশন - ৩ মাস',
  'বেসিক গ্রাফিক্স ডিজাইন - ৩ মাস',
];

export function CoursesSection() {
  return (
    <SectionWrapper id="courses">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <CustomList
          title="৬ মাস (৩৬০ ঘন্টা) মেয়াদী কোর্স"
          items={longTermCourses}
        />
        <CustomList title="স্বল্প মেয়াদী কোর্স সমূহ" items={shortTermCourses} />
      </div>
    </SectionWrapper>
  );
}

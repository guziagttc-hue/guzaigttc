'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { SectionTitle } from '../section-title';
import { SectionWrapper } from '../section-wrapper';

export function AdmissionSection() {
  return (
    <SectionWrapper id="admission">
      <SectionTitle fullWidth>অনলাইন ভর্তি ফরম</SectionTitle>
      <Card className="border-t-4 border-primary shadow-xl">
        <CardContent className="p-6 md:p-8">
          <form
            action="mailto:guzia.ttc2024@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">শিক্ষার্থীর নাম:</Label>
                <Input id="name" name="name" required placeholder="নাম লিখুন" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="father_name">পিতার নাম:</Label>
                <Input
                  id="father_name"
                  name="father_name"
                  required
                  placeholder="পিতার নাম"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="mobile">মোবাইল নাম্বার:</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  required
                  placeholder="017xxxxxxxx"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">বয়স (নূন্যতম ১৮):</Label>
                <Input id="age" name="age" type="number" min="18" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="education">
                শিক্ষাগত যোগ্যতা (নূন্যতম ৮ম শ্রেণি):
              </Label>
              <Input
                id="education"
                name="education"
                placeholder="SSC / HSC / Class 8"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="course">কোর্স সিলেক্ট করুন:</Label>
              <Select name="course">
                <SelectTrigger id="course">
                  <SelectValue placeholder="একটি কোর্স সিলেক্ট করুন" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="কম্পিউটার অফিস অ্যাপ্লিকেশন">
                    কম্পিউটার অফিস অ্যাপ্লিকেশন
                  </SelectItem>
                  <SelectItem value="ড্রাইভিং কাম অটোমেকানিক্স">
                    ড্রাইভিং কাম অটোমেকানিক্স
                  </SelectItem>
                  <SelectItem value="ইলেকট্রিক্যাল হাউজওয়্যারিং">
                    ইলেকট্রিক্যাল হাউজওয়্যারিং
                  </SelectItem>
                  <SelectItem value="গ্রাফিক্স ডিজাইন">গ্রাফিক্স ডিজাইন</SelectItem>
                  <SelectItem value="বুটিক">বুটিক</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">ঠিকানা:</Label>
              <Textarea
                id="address"
                name="address"
                rows={3}
                placeholder="গ্রাম, ডাকঘর, থানা..."
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[hsl(var(--dark-blue-hsl))] py-6 text-lg font-bold text-white hover:bg-primary"
            >
              আবেদন পাঠান
            </Button>
          </form>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}

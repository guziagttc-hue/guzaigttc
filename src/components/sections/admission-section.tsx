'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
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
import { useFirestore } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const admissionSchema = z.object({
  studentName: z.string().min(1, 'শিক্ষার্থীর নাম আবশ্যক'),
  fatherName: z.string().min(1, 'পিতার নাম আবশ্যক'),
  mobileNumber: z.string().min(1, 'মোবাইল নাম্বার আবশ্যক'),
  age: z.coerce.number().min(18, 'বয়স ন্যূনতম ১৮ হতে হবে'),
  education: z.string().optional(),
  course: z.string().min(1, 'কোর্স সিলেক্ট করা আবশ্যক'),
  address: z.string().optional(),
});

type AdmissionFormValues = z.infer<typeof admissionSchema>;

export function AdmissionSection() {
  const db = useFirestore();
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      studentName: '',
      fatherName: '',
      mobileNumber: '',
      age: 18,
      education: '',
      course: '',
      address: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = (values: AdmissionFormValues) => {
    if (!db) {
        toast({
            variant: 'destructive',
            title: 'ত্রুটি',
            description: 'ডাটাবেস সংযোগ স্থাপন করা যায়নি।',
        });
        return;
    }

    addDoc(collection(db, 'admissions'), {
      ...values,
      createdAt: serverTimestamp(),
    }).then(() => {
        toast({
          title: 'সফল হয়েছে',
          description: 'আপনার আবেদন সফলভাবে জমা হয়েছে।',
        });
        form.reset();
        router.push('/admissions');
    }).catch((error) => {
      console.error('Error adding document: ', error);
      toast({
        variant: 'destructive',
        title: 'ত্রুটি',
        description: 'আবেদন জমা দেওয়ার সময় একটি সমস্যা হয়েছে।',
      });
    });
  };

  return (
    <SectionWrapper id="admission">
      <SectionTitle fullWidth>অনলাইন ভর্তি ফরম</SectionTitle>
      <Card className="border-t-4 border-primary shadow-xl">
        <CardContent className="p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="studentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>শিক্ষার্থীর নাম:</FormLabel>
                      <FormControl>
                        <Input placeholder="নাম লিখুন" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fatherName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>পিতার নাম:</FormLabel>
                      <FormControl>
                        <Input placeholder="পিতার নাম" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="mobileNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>মোবাইল নাম্বার:</FormLabel>
                      <FormControl>
                        <Input placeholder="017xxxxxxxx" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>বয়স (নূন্যতম ১৮):</FormLabel>
                      <FormControl>
                        <Input type="number" min="18" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="education"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>শিক্ষাগত যোগ্যতা (নূন্যতম ৮ম শ্রেণি):</FormLabel>
                    <FormControl>
                      <Input placeholder="SSC / HSC / Class 8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>কোর্স সিলেক্ট করুন:</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="একটি কোর্স সিলেক্ট করুন" />
                        </SelectTrigger>
                      </FormControl>
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
                        <SelectItem value="গ্রাফিক্স ডিজাইন">
                          গ্রাফিক্স ডিজাইন
                        </SelectItem>
                        <SelectItem value="বুটিক">বুটিক</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ঠিকানা:</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={3}
                        placeholder="গ্রাম, ডাকঘর, থানা..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[hsl(var(--dark-blue-hsl))] py-6 text-lg font-bold text-white hover:bg-primary"
              >
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                আবেদন পাঠান
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}

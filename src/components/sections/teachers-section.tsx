'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Briefcase, Car, Cog, Laptop, Monitor, User, X } from 'lucide-react';
import {
  PlaceHolderImages,
  type ImagePlaceholder,
} from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '../section-wrapper';
import { SectionTitle } from '../section-title';

type TeacherInfo = {
  name: string;
  role?: string;
  imgId?: string;
  icon?: React.ReactNode;
  bio?: {
    education?: string;
    experience?: string;
    specialty?: string;
  };
};

const teachers: {
  board: TeacherInfo[];
  computer: TeacherInfo[];
  driving: TeacherInfo[];
  other: TeacherInfo[];
} = {
  board: [
    {
      name: 'মো: মশিফুকর রহমান (জিহাদ)',
      role: 'অধ্যক্ষ',
      icon: (
        <Cog className="h-16 w-16 animate-spin text-primary/80 [animation-duration:5s]" />
      ),
      bio: {
        education: 'বি.এস.এস (অনার্স)',
        experience: '১০ বছরের অভিজ্ঞতা',
        specialty: 'প্রতিষ্ঠান পরিচালনা',
      },
    },
    {
      name: '[পরিচালকের নাম]',
      role: 'পরিচালক',
      icon: <Briefcase className="h-16 w-16 animate-pulse text-primary/80" />,
      bio: {
        education: 'শিক্ষাগত যোগ্যতা',
        experience: 'অভিজ্ঞতা',
        specialty: 'বিশেষত্ব',
      },
    },
  ],
  computer: [
    {
      name: 'কম্পিউটার শিক্ষক ১',
      icon: <Laptop className="h-16 w-16 animate-bounce text-primary/80" />,
      bio: {
        education: 'ডিপ্লোমা ইন কম্পিউটার',
        experience: '৫ বছরের অভিজ্ঞতা',
        specialty: 'অফিস অ্যাপ্লিকেশন',
      },
    },
    {
      name: 'কম্পিউটার শিক্ষক ২',
      icon: <Monitor className="h-16 w-16 animate-bounce text-primary/80" />,
      bio: {
        education: 'বি.এস.সি ইন সি.এস.ই',
        experience: '৭ বছরের অভিজ্ঞতা',
        specialty: 'গ্রাফিক্স ডিজাইন',
      },
    },
    {
      name: 'মোঃ ইসাহাক আলী',
      imgId: 'teacher3',
      bio: {
        education: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং',
        experience: '৮ বছরের অভিজ্ঞতা',
        specialty: 'ওয়েব ডেভেলপমেন্ট',
      },
    },
  ],
  driving: [
    {
      name: 'ড্রাইভিং ইন্সট্রাক্টর',
      icon: <Car className="h-16 w-16 text-primary/80" />,
      bio: {
        experience: '১৫ বছরের ড্রাইভিং অভিজ্ঞতা',
        specialty: 'অটোমেকানিক্স ও নিরাপদ ড্রাইভিং',
      },
    },
  ],
  other: [
    {
      name: 'সহায়ক কর্মী',
      icon: <User className="h-16 w-16 text-primary/80" />,
      bio: {
        experience: 'প্রতিষ্ঠানের প্রশাসনিক কাজে সহায়তা',
      },
    },
  ],
};

const TeacherCard = ({
  teacher,
  onClick,
}: {
  teacher: TeacherInfo;
  onClick: () => void;
}) => {
  const imageData = PlaceHolderImages.find((img) => img.id === teacher.imgId);

  return (
    <Card
      onClick={onClick}
      className="cursor-pointer text-center transition-all hover:scale-105 hover:shadow-xl"
    >
      <CardHeader>
        <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-primary bg-secondary">
          {imageData ? (
            <Image
              src={imageData.imageUrl}
              alt={imageData.description}
              data-ai-hint={imageData.imageHint}
              width={112}
              height={112}
              className="h-full w-full object-cover"
            />
          ) : (
            teacher.icon
          )}
        </div>
        <CardTitle>{teacher.name}</CardTitle>
        {teacher.role && (
          <CardDescription className="font-semibold text-primary">
            {teacher.role}
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  );
};

export function TeachersSection() {
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherInfo | null>(
    null
  );

  return (
    <SectionWrapper id="teachers">
      <SectionTitle fullWidth>আমাদের শিক্ষক ও পরিচালনা পর্ষদ</SectionTitle>

      <div className="space-y-12">
        <div>
          <h3 className="mb-6 text-center text-2xl font-semibold text-primary">
            পরিচালনা পর্ষদ
          </h3>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
            {teachers.board.map((teacher, i) => (
              <TeacherCard
                key={i}
                teacher={teacher}
                onClick={() => setSelectedTeacher(teacher)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-center text-2xl font-semibold text-primary">
            কম্পিউটার বিভাগ
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.computer.map((teacher, i) => (
              <TeacherCard
                key={i}
                teacher={teacher}
                onClick={() => setSelectedTeacher(teacher)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-center text-2xl font-semibold text-primary">
            ড্রাইভিং বিভাগ
          </h3>
          <div className="mx-auto grid max-w-xs grid-cols-1 gap-8">
            {teachers.driving.map((teacher, i) => (
              <TeacherCard
                key={i}
                teacher={teacher}
                onClick={() => setSelectedTeacher(teacher)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-center text-2xl font-semibold text-primary">
            অন্যান্য স্টাফ
          </h3>
          <div className="mx-auto grid max-w-xs grid-cols-1 gap-8">
            {teachers.other.map((teacher, i) => (
              <TeacherCard
                key={i}
                teacher={teacher}
                onClick={() => setSelectedTeacher(teacher)}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog
        open={!!selectedTeacher}
        onOpenChange={(isOpen) => !isOpen && setSelectedTeacher(null)}
      >
        <DialogContent className="max-w-md">
          {selectedTeacher && (
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {selectedTeacher.name}
              </DialogTitle>
              {selectedTeacher.role && (
                <DialogDescription className="text-lg font-semibold text-primary">
                  {selectedTeacher.role}
                </DialogDescription>
              )}
              <div className="pt-4 text-left">
                <ul className="space-y-2">
                  {selectedTeacher.bio?.education && (
                    <li>
                      <strong>শিক্ষাগত যোগ্যতা:</strong>{' '}
                      {selectedTeacher.bio.education}
                    </li>
                  )}
                  {selectedTeacher.bio?.experience && (
                    <li>
                      <strong>অভিজ্ঞতা:</strong> {selectedTeacher.bio.experience}
                    </li>
                  )}
                  {selectedTeacher.bio?.specialty && (
                    <li>
                      <strong>বিশেষত্ব:</strong> {selectedTeacher.bio.specialty}
                    </li>
                  )}
                </ul>
              </div>
            </DialogHeader>
          )}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}

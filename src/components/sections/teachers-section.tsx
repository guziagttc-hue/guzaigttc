import Image from 'next/image';
import { Car, User } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '../section-wrapper';
import { SectionTitle } from '../section-title';

const TeacherCard = ({
  name,
  role,
  imgId,
  icon,
}: {
  name: string;
  role?: string;
  imgId?: string;
  icon?: React.ReactNode;
}) => {
  const imageData = PlaceHolderImages.find((img) => img.id === imgId);

  return (
    <Card className="text-center transition-all hover:scale-105 hover:shadow-xl">
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
            icon
          )}
        </div>
        <CardTitle>{name}</CardTitle>
        {role && (
          <CardDescription className="font-semibold text-primary">
            {role}
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  );
};

export function TeachersSection() {
  return (
    <SectionWrapper id="teachers">
      <SectionTitle fullWidth>আমাদের শিক্ষক ও পরিচালনা পর্ষদ</SectionTitle>

      <div className="space-y-12">
        <div>
          <h3 className="mb-6 text-center text-2xl font-semibold text-primary">
            পরিচালনা পর্ষদ
          </h3>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
            <TeacherCard
              name="মো: মশিফুকর রহমান (জিহাদ)"
              role="অধ্যক্ষ"
              imgId="principal"
            />
            <TeacherCard name="[পরিচালকের নাম]" role="পরিচালক" imgId="director" />
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-center text-2xl font-semibold text-primary">
            কম্পিউটার বিভাগ
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TeacherCard name="কম্পিউটার শিক্ষক ১" imgId="teacher1" />
            <TeacherCard name="কম্পিউটার শিক্ষক ২" imgId="teacher2" />
            <TeacherCard name="কম্পিউটার শিক্ষক ৩" imgId="teacher3" />
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-center text-2xl font-semibold text-primary">
            অন্যান্য স্টাফ
          </h3>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
            <TeacherCard
              name="ড্রাইভিং ইন্সট্রাক্টর"
              icon={<Car className="h-16 w-16 text-primary/80" />}
            />
            <TeacherCard
              name="সহায়ক কর্মী"
              icon={<User className="h-16 w-16 text-primary/80" />}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

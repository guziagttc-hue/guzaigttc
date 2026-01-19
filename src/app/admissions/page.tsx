'use client';

import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Loader2 } from 'lucide-react';
import { format } from 'date-fns';

type Admission = {
  id: string;
  studentName: string;
  fatherName: string;
  mobileNumber: string;
  age: number;
  course: string;
  education?: string;
  address?: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
};

export default function AdmissionsPage() {
  const db = useFirestore();
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!db) {
        setLoading(false);
        return;
    };
    
    const q = query(collection(db, 'admissions'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const admissionsData: Admission[] = [];
      querySnapshot.forEach((doc) => {
        admissionsData.push({ id: doc.id, ...doc.data() } as Admission);
      });
      setAdmissions(admissionsData);
      setLoading(false);
    }, (err) => {
      console.error(err);
      setError(err);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [db]);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
       <Card>
        <CardHeader>
          <CardTitle>ভর্তি হওয়া শিক্ষার্থীদের তালিকা</CardTitle>
        </CardHeader>
        <CardContent>
          {loading && (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className='ml-2'>লোড হচ্ছে...</p>
            </div>
          )}
          {error && <p className="text-destructive">ত্রুটি: {error.message}</p>}
          {!loading && !error && (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>শিক্ষার্থীর নাম</TableHead>
                    <TableHead>পিতার নাম</TableHead>
                    <TableHead>মোবাইল</TableHead>
                    <TableHead>কোর্স</TableHead>
                    <TableHead className="text-right">আবেদনের তারিখ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {admissions.length > 0 ? (
                    admissions.map((admission) => (
                      <TableRow key={admission.id}>
                        <TableCell className="font-medium">{admission.studentName}</TableCell>
                        <TableCell>{admission.fatherName}</TableCell>
                        <TableCell>{admission.mobileNumber}</TableCell>
                        <TableCell>{admission.course}</TableCell>
                        <TableCell className="text-right">
                          {admission.createdAt
                            ? format(
                                new Date(admission.createdAt.seconds * 1000),
                                'dd/MM/yyyy'
                              )
                            : '-'}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">
                        কোনো ভর্তি পাওয়া যায়নি।
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

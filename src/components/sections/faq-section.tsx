'use client';

import { useState } from 'react';
import { askQuestion } from '@/ai/flows/faq-generator';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Sparkles } from 'lucide-react';
import { SectionTitle } from '../section-title';
import { SectionWrapper } from '../section-wrapper';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

export function FaqSection() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer('');
    setError(null);

    try {
      const result = await askQuestion({ question });
      setAnswer(result.answer);
    } catch (err) {
      setError('একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id="faq">
      <SectionTitle fullWidth>সচরাচর জিজ্ঞাস্য (AI)</SectionTitle>
      <Card className="overflow-hidden shadow-xl">
        <CardHeader className="bg-muted/50">
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="text-primary" />
            <span>AI দ্বারা উত্তর পান</span>
          </CardTitle>
          <CardDescription>
            আমাদের ট্রেনিং সেন্টার সম্পর্কে আপনার কোন প্রশ্ন থাকলে নিচে জিজ্ঞাসা
            করুন।
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="faq-question">আপনার প্রশ্ন</Label>
              <Input
                id="faq-question"
                placeholder="उदा: ড্রাইভিং কোর্সের ফি কত?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <Button type="submit" disabled={isLoading || !question.trim()} className="w-full sm:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  অনুসন্ধান চলছে...
                </>
              ) : (
                'উত্তর খুঁজুন'
              )}
            </Button>
          </form>
        </CardContent>
        {(isLoading || error || answer) && (
            <CardFooter className="flex flex-col items-start gap-4 p-6 pt-0">
                {isLoading && (
                    <div className="flex w-full items-center gap-2 text-muted-foreground">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>আপনার উত্তরের জন্য অপেক্ষা করুন...</span>
                    </div>
                )}
                {error && (
                <Alert variant="destructive" className="w-full">
                    <AlertTitle>ত্রুটি</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
                )}
                {answer && (
                <Card className="w-full bg-secondary">
                    <CardHeader>
                    <CardTitle className="text-lg">AI এর উত্তর</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="leading-relaxed">{answer}</p>
                    </CardContent>
                </Card>
                )}
            </CardFooter>
        )}
      </Card>
    </SectionWrapper>
  );
}

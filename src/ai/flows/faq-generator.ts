'use server';
/**
 * @fileOverview An AI agent that answers frequently asked questions about the training center.
 *
 * - askQuestion - A function that takes a question as input and returns an answer.
 * - FAQInput - The input type for the askQuestion function.
 * - FAQOutput - The return type for the askQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FAQInputSchema = z.object({
  question: z.string().describe('The question to be answered.'),
});
export type FAQInput = z.infer<typeof FAQInputSchema>;

const FAQOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type FAQOutput = z.infer<typeof FAQOutputSchema>;

export async function askQuestion(input: FAQInput): Promise<FAQOutput> {
  return faqGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'faqGeneratorPrompt',
  input: {schema: FAQInputSchema},
  output: {schema: FAQOutputSchema},
  prompt: `You are an AI-powered FAQ generator for Gujia Technical Training Center. Answer the following question about the training center:\n\nQuestion: {{{question}}}`,
});

const faqGeneratorFlow = ai.defineFlow(
  {
    name: 'faqGeneratorFlow',
    inputSchema: FAQInputSchema,
    outputSchema: FAQOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

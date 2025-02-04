import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { quizConfig } from '@/helpers';
import { quizMetadata } from '@/helpers/metadata-content';
import { QuizPageTemplate } from '@/modules/quiz/templates';

export const metadata: Metadata = quizMetadata;

interface QuizPageProps {
  params: {
    pageId: string;
  };
}

export default function QuizPage({ params }: QuizPageProps) {
  const { pageId } = params;

  const pageConfig = quizConfig.pages.find(({ id }) => id === pageId);

  if (!pageConfig) {
    return notFound();
  }

  return <QuizPageTemplate pageConfig={pageConfig} />;
}

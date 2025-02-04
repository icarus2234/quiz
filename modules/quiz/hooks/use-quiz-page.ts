'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getNextPageId, PageTypes, QuizPage, Routes } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { writeAnswers } from '@/store/quiz';

export const useQuizPage = (pageConfig: QuizPage) => {
  const { push } = useRouter();
  const [selectedAnswersIds, setSelectedAnswersIds] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const collectedQuizData = useAppSelector(
    (state) => state.quiz.collectedQuizData
  );

  const { titleTemplate, pageType, answers, htmlDescription } = pageConfig;

  const refinedAnswers =
    answers?.map((answer) => {
      return {
        ...answer,
        isSelected: selectedAnswersIds.some((id) => id === answer.id),
      };
    }) || [];

  const goToNextQuestion = () => {
    const selectedAnswers = answers?.filter(({ id }) =>
      selectedAnswersIds.includes(id)
    );

    dispatch(
      writeAnswers({
        answers: selectedAnswers || [],
      })
    );

    if (pageType === PageTypes.SingleChoice) {
      const nextPageId = selectedAnswers?.[0]?.nextPageId || null;
      push(`${nextPageId ? `/${nextPageId}` : Routes.End}`);
    } else {
      const nextPageId = getNextPageId(pageConfig, collectedQuizData);

      push(`${nextPageId ? `/${nextPageId}` : Routes.End}`);
    }
  };

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswersIds((prevSelectedAnswers) => {
      if (prevSelectedAnswers.includes(answerId)) {
        return prevSelectedAnswers.filter((id) => id !== answerId);
      } else {
        return [...prevSelectedAnswers, answerId];
      }
    });
  };

  useEffect(() => {
    if (selectedAnswersIds.length) {
      setTimeout(() => {
        goToNextQuestion();
      }, 300); // 300ms delay to increase user experience
    }
  }, [selectedAnswersIds]);

  return {
    titleTemplate,
    htmlDescription,
    answers: refinedAnswers,
    handleAnswerSelect,
    goToNextQuestion,
  };
};

'use client';

import { useRouter } from 'next/navigation';

import { Routes } from '@/helpers';
import { Button, Typography } from '@/modules/layout';
import { AnswerContainer } from '@/modules/quiz/components/answer-container';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { resetQuiz } from '@/store/quiz';

import styles from './end.module.css';

export const EndTemplate = () => {
  const router = useRouter();
  const answers = useAppSelector((state) => state.quiz.collectedAnswers);
  const dispatch = useAppDispatch();

  const handleEndGame = () => {
    dispatch(resetQuiz());
    router.push(Routes.Home);
  };

  return (
    <div className={styles.endContainer}>
      <Typography
        variant="body"
        style={{
          fontWeight: 700,
        }}
      >
        Answers
      </Typography>

      <AnswerContainer
        answers={answers as never}
        handleAnswerSelect={() => null}
      />

      <Button onClick={handleEndGame}>Try again</Button>
    </div>
  );
};

import { useEffect, useRef } from 'react';

import { QuizConfig } from '@/helpers';
import { useAppDispatch } from '@/store/hooks';
import { startQuiz } from '@/store/quiz';

export const useCreateQuiz = (quizConfig: QuizConfig) => {
  const dispatch = useAppDispatch();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      dispatch(startQuiz(quizConfig));
      initialized.current = true;
    }
  }, [quizConfig, dispatch]);
};

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  createEmptyCollectedData,
  defaultCollectedQuizDataItem,
} from '@/helpers';
import { Answer, CollectedQuizData, QuizConfig } from '@/helpers/types';

type QuizState = {
  quizConfig: QuizConfig;
  collectedQuizData: CollectedQuizData;
  collectedAnswers: Answer[];
};

const initialState: QuizState = {
  quizConfig: {
    id: '',
    collectedQuizDataNames: [],
    pages: [],
  },
  collectedQuizData: {},
  collectedAnswers: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz(state, action: PayloadAction<QuizConfig>) {
      state.collectedAnswers = [];
      state.collectedQuizData = createEmptyCollectedData(
        action.payload.collectedQuizDataNames,
        defaultCollectedQuizDataItem
      );
      state.quizConfig = action.payload;
    },
    writeAnswers(state, action: PayloadAction<{ answers: Answer[] }>) {
      action.payload.answers.forEach((answer) => {
        state.collectedAnswers.push(answer);
        if (answer.collectedDataName) {
          state.collectedQuizData[answer.collectedDataName] = {
            name: answer.collectedDataName,
            data: answer.value,
            collected: true,
          };
        }
      });
    },
    resetQuiz(state) {
      state.collectedAnswers = [];
      state.collectedQuizData = {};
    },
  },
});

export const { startQuiz, writeAnswers, resetQuiz } = quizSlice.actions;

export default quizSlice.reducer;

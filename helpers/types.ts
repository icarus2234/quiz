export enum Routes {
  Home = '/',
  Quiz = '/quiz',
  End = '/end',
}
export type PageType = 'info' | 'multi-choice' | 'single-choice';

export enum PageTypes {
  Info = 'info',
  MultiChoice = 'multi-choice',
  SingleChoice = 'single-choice',
}

export type AnswerValues = string | number | object | boolean;

export interface NavigateCondition {
  [nextPageId: string]: {
    collectedDataName: string;
    value: AnswerValues;
  };
}

export interface CollectedQuizDataItem {
  name: string;
  data?: AnswerValues;
  collected: boolean;
}

export type CollectedQuizData = {
  [key: string]: CollectedQuizDataItem;
};

export type Answer = {
  id: string;
  label?: string;
  value?: AnswerValues;
  nextPageId?: string;
  collectedDataName?: string;
};

export type QuizPage = {
  id: string;
  pageType: PageType;
  titleTemplate: string;
  htmlDescription?: string;
  dynamicDataNames?: string[];
  navigateTo?: NavigateCondition;
  nextPageId?: string;
  answers?: Answer[];
};

export type QuizConfig = {
  id: string;
  collectedQuizDataNames: string[];
  pages: QuizPage[];
};

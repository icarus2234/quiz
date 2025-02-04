import backgroundStyles from '@/styles/backgrounds.module.css';

import { logoSrc } from './constants';
import { CollectedQuizData, CollectedQuizDataItem, QuizPage } from './types';

export const mapBackgroundStylesByRoute = (pathname: string) => {
  const bgClassName = pathname.replace('/', '');

  return backgroundStyles[bgClassName] || backgroundStyles.default;
};

export const createEmptyCollectedData = (
  keys: string[],
  defaultValue: Omit<CollectedQuizDataItem, 'name'>
) => {
  return keys.reduce(
    (acc, key) => {
      acc[key] = { ...defaultValue, name: key };
      return acc;
    },
    {} as Record<string, CollectedQuizDataItem>
  );
};

export const getNextPageId = (
  currentPage: QuizPage,
  collectedData: CollectedQuizData
): string | undefined => {
  if (currentPage.navigateTo) {
    for (const [nextPageId, condition] of Object.entries(
      currentPage.navigateTo
    )) {
      if (collectedData[condition.collectedDataName].data === condition.value) {
        return nextPageId;
      }
    }
  }
  return currentPage.nextPageId;
};

export const mapLogoByRoute = (pathname: string) => {
  const pageId = pathname.replace('/', '');

  return logoSrc[pageId] || logoSrc.default;
};

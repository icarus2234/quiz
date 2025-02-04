import React from 'react';

import { Typography } from '@/modules/layout';
import { useAppSelector } from '@/store/hooks';

interface QuizTitleProps {
  template: string;
}

const QuizTitle: React.FC<QuizTitleProps> = ({ template }) => {
  const collectedQuizData = useAppSelector(
    (state) => state.quiz.collectedQuizData
  );

  const populateTemplate = (template: string) => {
    return template.replace(/{(.*?)}/g, (_, key) => {
      const [variable, condition] = key.split(' (if ');
      const conditionKey = condition?.replace(')', '');

      if (conditionKey) {
        const conditionValue = collectedQuizData[conditionKey]?.data;
        if (!conditionValue) {
          return '';
        }
      }

      if (variable && !conditionKey) {
        return collectedQuizData[variable]?.data || '';
      }
      return conditionKey ? variable : '';
    });
  };

  return (
    <Typography variant="heading1">{populateTemplate(template)}</Typography>
  );
};

export default QuizTitle;

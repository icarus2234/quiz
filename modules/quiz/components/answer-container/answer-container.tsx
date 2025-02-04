import { FC } from 'react';

import type { Answer } from '@/helpers';

import { AnswerOption } from '../answer-option';
import styles from './answer-container.module.css';

interface AnswerContainerProps {
  answers: (Pick<Answer, 'id' | 'label'> & { isSelected: boolean })[];
  handleAnswerSelect: (id: string) => void;
}

export const AnswerContainer: FC<AnswerContainerProps> = ({
  answers,
  handleAnswerSelect,
}) => {
  return (
    <div className={styles.answerContainer}>
      {answers.map(({ label, id, isSelected }) => (
        <AnswerOption
          key={id}
          id={id}
          answerText={label}
          isSelected={isSelected}
          handleAnswerSelect={handleAnswerSelect}
        />
      ))}
    </div>
  );
};

import classNames from 'classnames';
import { FC } from 'react';

import styles from './answer.module.css';

interface AnswerOptionProps {
  id: string;
  answerText?: string;
  isSelected: boolean;
  handleAnswerSelect: (id: string) => void;
}

export const AnswerOption: FC<AnswerOptionProps> = ({
  id,
  answerText,
  isSelected,
  handleAnswerSelect,
}) => {
  const answerStyles = classNames(styles.answerOption, {
    [styles.selected]: isSelected,
  });

  const onSelect = () => {
    handleAnswerSelect(id);
  };

  return (
    <div className={styles.answerOptionContainer}>
      <button className={answerStyles} onClick={onSelect}>
        {answerText}
      </button>
    </div>
  );
};

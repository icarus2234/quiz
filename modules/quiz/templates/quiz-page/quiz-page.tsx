'use client';
import { FC } from 'react';

import { QuizPage } from '@/helpers';
import { Button } from '@/modules/layout';
import { useQuizPage } from '@/modules/quiz/hooks/use-quiz-page';

import { AnswerContainer } from '../../components/answer-container';
import { HtmlDescription } from '../../components/html-description';
import QuizTitle from '../../components/quiz-title/quiz-title';
import styles from './quiz-page.module.css';

interface QuizPageTemplateProps {
  pageConfig: QuizPage;
}

export const QuizPageTemplate: FC<QuizPageTemplateProps> = ({ pageConfig }) => {
  const {
    htmlDescription,
    titleTemplate,
    answers,
    handleAnswerSelect,
    goToNextQuestion,
  } = useQuizPage(pageConfig);

  return (
    <div className={styles.container}>
      <QuizTitle template={titleTemplate} />
      {htmlDescription && <HtmlDescription content={htmlDescription} />}
      {answers.length ? (
        <AnswerContainer
          answers={answers}
          handleAnswerSelect={handleAnswerSelect}
        />
      ) : (
        <Button
          style={{
            marginTop: '24px',
          }}
          onClick={goToNextQuestion}
        >
          Next
        </Button>
      )}
    </div>
  );
};

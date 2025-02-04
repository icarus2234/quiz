import { FC } from 'react';

interface HtmlDescriptionProps {
  content: string;
}

export const HtmlDescription: FC<HtmlDescriptionProps> = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

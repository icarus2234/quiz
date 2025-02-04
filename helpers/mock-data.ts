import { v4 as uuidv4 } from 'uuid';

import { QuizConfig } from './types';

export const quizConfig: QuizConfig = {
  id: 'quiz1',
  collectedQuizDataNames: ['gender', 'haveChildren', 'overthink'],
  pages: [
    {
      id: 'page1',
      pageType: 'single-choice',
      titleTemplate: 'Select your gender:',
      dynamicDataNames: ['gender'],
      answers: [
        {
          id: uuidv4(),
          label: 'Male',
          value: 'male',
          nextPageId: 'page2',
          collectedDataName: 'gender',
        },
        {
          id: uuidv4(),
          label: 'Female',
          value: 'female',
          nextPageId: 'page2',
          collectedDataName: 'gender',
        },
      ],
    },
    {
      id: 'page2',
      pageType: 'single-choice',
      titleTemplate:
        'So we can get to know you better, tell us about your relationship status.',
      dynamicDataNames: [],
      answers: [
        {
          id: uuidv4(),
          label: 'Single',
          value: 'single',
          nextPageId: 'page31',
        },
        {
          id: uuidv4(),
          label: 'In a relationship',
          value: 'in-a-relationship',
          nextPageId: 'page32',
        },
      ],
    },
    {
      id: 'page32',
      pageType: 'single-choice',
      titleTemplate: 'Are you a single parent?',
      dynamicDataNames: [],
      answers: [
        {
          id: uuidv4(),
          label: 'Yes',
          value: true,
          nextPageId: 'page321',
        },
        {
          id: uuidv4(),
          label: 'No',
          value: false,
          nextPageId: 'page321',
        },
      ],
    },
    {
      id: 'page321',
      pageType: 'single-choice',
      titleTemplate: 'Are you a single parent?',
      dynamicDataNames: ['haveChildren'],
      answers: [
        {
          id: uuidv4(),
          label: 'Yes',
          value: true,
          nextPageId: 'page322',
          collectedDataName: 'haveChildren',
        },
        {
          id: uuidv4(),
          label: 'No',
          value: false,
          nextPageId: 'page322',
          collectedDataName: 'haveChildren',
        },
      ],
    },
    {
      id: 'page322',
      pageType: 'single-choice',
      titleTemplate:
        'Single {gender} {who have children (if haveChildren)} need a slightly different approach to improve their relationship. Which statement best describes you?',
      dynamicDataNames: [],
      answers: [
        {
          id: uuidv4(),
          label:
            'I’m very unhappy with how things are going in my relationship',
          value:
            'I’m very unhappy with how things are going in my relationship',
          nextPageId: 'page323',
        },
        {
          id: uuidv4(),
          label:
            'I’m unhappy with parts of my relationship, but some things are working well',
          value:
            'I’m unhappy with parts of my relationship, but some things are working well',
          nextPageId: 'page323',
        },
        {
          id: uuidv4(),
          label: 'I’m generally happy in my relationship',
          value: 'I’m generally happy in my relationship',
          nextPageId: 'page323',
        },
      ],
    },
    {
      id: 'page323',
      pageType: 'single-choice',
      titleTemplate: 'Do you tend to overthink?',
      dynamicDataNames: ['overthink'],
      answers: [
        {
          id: uuidv4(),
          label: 'Yes',
          value: true,
          nextPageId: 'page324',
          collectedDataName: 'overthink',
        },
        {
          id: uuidv4(),
          label: 'No',
          value: false,
          nextPageId: 'page324',
          collectedDataName: 'overthink',
        },
      ],
    },
    {
      id: 'page324',
      pageType: 'info',
      titleTemplate: 'So how does it work?',
      htmlDescription:
        '<div style="margin-top: 24px; font-size: 14px; line-height: 26px;">We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.</div>',
      dynamicDataNames: [],
      navigateTo: {
        page3241: {
          collectedDataName: 'overthink',
          value: true,
        },
        page3242: {
          collectedDataName: 'overthink',
          value: false,
        },
      },
      answers: [],
    },
    {
      id: 'page3241',
      pageType: 'single-choice',
      titleTemplate: 'What is most important to you?',
      dynamicDataNames: [],
      answers: [
        {
          id: uuidv4(),
          label: 'Success',
          value: 'Success',
          nextPageId: 'how-did-you-hear-about-us',
        },
        {
          id: uuidv4(),
          label: 'Romance',
          value: 'Romance',
          nextPageId: 'how-did-you-hear-about-us',
        },
        {
          id: uuidv4(),
          label: 'Stability',
          value: 'Stability',
          nextPageId: 'how-did-you-hear-about-us',
        },
        {
          id: uuidv4(),
          label: 'Freedom',
          value: 'Freedom',
          nextPageId: 'how-did-you-hear-about-us',
        },
      ],
    },
    {
      id: 'page3242',
      pageType: 'single-choice',
      titleTemplate: 'Is emotional control tricky for you?',
      dynamicDataNames: [],
      answers: [
        {
          id: uuidv4(),
          label: 'Yes',
          value: 'Yes',
          nextPageId: 'how-did-you-hear-about-us',
        },
        {
          id: uuidv4(),
          label: 'Sometimes',
          value: 'Sometimes',
          nextPageId: 'how-did-you-hear-about-us',
        },
        {
          id: uuidv4(),
          label: 'Rarely',
          value: 'Rarely',
          nextPageId: 'how-did-you-hear-about-us',
        },
        {
          id: uuidv4(),
          label: 'Not at all',
          value: 'Not at all',
          nextPageId: 'how-did-you-hear-about-us',
        },
      ],
    },
    {
      id: 'page31',
      pageType: 'single-choice',
      titleTemplate: 'Are you a parent?',
      dynamicDataNames: ['haveChildren'],
      answers: [
        {
          id: uuidv4(),
          label: 'Yes',
          value: true,
          nextPageId: 'page311',
          collectedDataName: 'haveChildren',
        },
        {
          id: uuidv4(),
          label: 'No',
          value: false,
          nextPageId: 'page311',
          collectedDataName: 'haveChildren',
        },
      ],
    },
    {
      id: 'page311',
      pageType: 'single-choice',
      titleTemplate:
        '{gender} {who have children (if haveChildren)} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
      dynamicDataNames: [],
      answers: [
        {
          id: uuidv4(),
          label: 'I was unhappy with low things were going in my relationship',
          value: 'I was unhappy with low things were going in my relationship',
          nextPageId: 'page312',
        },
        {
          id: uuidv4(),
          label:
            'I was unhappy with parts of my relationship, but some thing were working',
          value:
            'I was unhappy with parts of my relationship, but some thing were working',
          nextPageId: 'page312',
        },
        {
          id: uuidv4(),
          label: 'I was generally happy with my relationship',
          value: 'I was generally happy with my relationship',
          nextPageId: 'page312',
        },
        {
          id: uuidv4(),
          label: 'I’ve never been in a relationship',
          value: 'I’ve never been in a relationship',
          nextPageId: 'page312',
        },
      ],
    },
    {
      id: 'page312',
      pageType: 'single-choice',
      titleTemplate: 'Is your partner an introvert or extrovert?',
      dynamicDataNames: [],
      answers: [
        {
          id: uuidv4(),
          label: 'Introvert',
          value: 'Introvert',
          nextPageId: 'page313',
        },
        {
          id: uuidv4(),
          label: 'Extrovert',
          value: 'Extrovert',
          nextPageId: 'page313',
        },
        {
          id: uuidv4(),
          label: 'A bit of both',
          value: 'A bit of both',
          nextPageId: 'page313',
        },
      ],
    },
    {
      id: 'page313',
      pageType: 'single-choice',
      titleTemplate: 'What is your partner’s gender?',
      dynamicDataNames: [],
      answers: [
        {
          id: uuidv4(),
          label: 'Male',
          value: 'Male',
          nextPageId: 'page314',
        },
        {
          id: uuidv4(),
          label: 'Female',
          value: 'Female',
          nextPageId: 'page314',
        },
      ],
    },
    {
      id: 'page314',
      pageType: 'single-choice',
      titleTemplate: 'Do you agree with the statement below?',
      htmlDescription:
        '<div style="margin-top: 24px; font-size: 18px; line-height: 28px;">"My partner and I make sex a priority in our relationship"</div>',
      dynamicDataNames: [],
      answers: [
        {
          id: uuidv4(),
          label: 'Strongly agree',
          value: 'Strongly agree',
          nextPageId: 'page315',
        },
        {
          id: uuidv4(),
          label: 'Agree',
          value: 'Agree',
          nextPageId: 'page315',
        },
        {
          id: uuidv4(),
          label: 'Neutral',
          value: 'Neutral',
          nextPageId: 'page315',
        },
        {
          id: uuidv4(),
          label: 'Disagree',
          value: 'Disagree',
          nextPageId: 'page315',
        },
        {
          id: uuidv4(),
          label: 'Strongly disagree',
          value: 'Strongly disagree',
          nextPageId: 'page315',
        },
      ],
    },
    {
      id: 'page315',
      pageType: 'single-choice',
      titleTemplate:
        'When you think about your relationship goals, you feel...?',
      dynamicDataNames: [],
      answers: [
        {
          id: uuidv4(),
          label: 'Optimistic! They are totally doable, with some guidance.',
          value: 'Optimistic! They are totally doable, with some guidance.',
          nextPageId: 'how-did-you-hear-about-us',
        },
        {
          id: uuidv4(),
          label: 'Cautious. I’ve struggled before, but I’m hopeful.',
          value: 'Cautious. I’ve struggled before, but I’m hopeful.',
          nextPageId: 'how-did-you-hear-about-us',
        },
        {
          id: uuidv4(),
          label: 'I’m feeling a little anxious, honestly.',
          value: 'I’m feeling a little anxious, honestly.',
          nextPageId: 'how-did-you-hear-about-us',
        },
      ],
    },
    {
      id: 'how-did-you-hear-about-us',
      pageType: 'single-choice',
      titleTemplate: 'Where did you hear about us?',
      dynamicDataNames: [],
      answers: [
        {
          id: uuidv4(),
          label: 'Poster or Billboard',
          value: 'Poster or Billboard',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'Friend or Family',
          value: 'Friend or Family',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'Instagram',
          value: 'Instagram',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'Direct Mail or Package Insert',
          value: 'Direct Mail or Package Insert',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'Online TV or Streaming TV',
          value: 'Online TV or Streaming TV',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'TV',
          value: 'TV',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'Radio',
          value: 'Radio',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'Search Engine (Google, Bing, etc.)',
          value: 'Search Engine (Google, Bing, etc.)',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'Newspaper or Magazine',
          value: 'Newspaper or Magazine',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'Facebook',
          value: 'Facebook',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'Blog Post or Website Review',
          value: 'Blog Post or Website Review',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'Podcast',
          value: 'Podcast',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'Influencer',
          value: 'Influencer',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'Youtube',
          value: 'Youtube',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'Pinterest',
          value: 'Pinterest',
          nextPageId: 'end',
        },
        {
          id: uuidv4(),
          label: 'Other',
          value: 'Other',
          nextPageId: 'end',
        },
      ],
    },
  ],
};

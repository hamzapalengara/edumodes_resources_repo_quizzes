import { lazy } from 'react';

const Worksheet = lazy(() => import('../components/ColorWorksheet'));
const AnswerKey = lazy(() => import('../components/ColorAnswerKey'));
const Tips = lazy(() => import('../components/ColorTips'));
const Thumbnail = lazy(() => import('../components/ColorThumbnail'));

export {
  Worksheet,
  AnswerKey,
  Tips,
  Thumbnail
}; 
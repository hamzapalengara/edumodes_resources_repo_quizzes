import { lazy } from 'react';

export const Worksheet = lazy(() => import('../components/RainbowColoringWorksheet'));
export const AnswerKey = lazy(() => import('../components/RainbowColoringAnswerKey'));
export const Tips = lazy(() => import('../components/RainbowColoringTips'));
export const Thumbnail = lazy(() => import('../components/RainbowColoringThumbnail')); 
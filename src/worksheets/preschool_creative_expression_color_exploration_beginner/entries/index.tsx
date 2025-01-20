import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import ColorWorksheet from '../components/ColorWorksheet';
import ColorAnswerKey from '../components/ColorAnswerKey';
import ColorTips from '../components/ColorTips';
import ColorThumbnail from '../components/ColorThumbnail';
import '../../../index.css';

const view = window.WORKSHEET_VIEW;
const root = createRoot(document.getElementById('root')!);

const components = {
  worksheet: ColorWorksheet,
  'answer_key': ColorAnswerKey,
  tips: ColorTips,
  thumbnail: ColorThumbnail
};

const Component = components[view as keyof typeof components];
root.render(createElement(Component)); 
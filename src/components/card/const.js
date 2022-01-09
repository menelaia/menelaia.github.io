import { Card, IframeCard, MediumCard } from './components';

export const CARD_TYPES = {
  NORMAL: 'normal',
  MEDIUM: 'medium',
  IFRAME: 'iframe',
};

export const CARD_COMPONENTS = {
  [CARD_TYPES.NORMAL]: Card,
  [CARD_TYPES.MEDIUM]: MediumCard,
  [CARD_TYPES.IFRAME]: IframeCard,
};

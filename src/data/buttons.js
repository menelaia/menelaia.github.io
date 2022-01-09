import React from 'react';
import {
  faGithub,
  faInstagram,
  faPagelines,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { StaticImage } from 'gatsby-plugin-image';
import { CARD_TYPES } from '../components/card/const';

export default [
  {
    title: 'instagram',
    icon: faInstagram,
    link: 'https://www.instagram.com/menelaia',
    type: CARD_TYPES.NORMAL,
  },
  {
    title: 'youtube',
    icon: faYoutube,
    link: 'https://www.youtube.com/channel/UCecbtS7p_Qfj4RofeDlOMwA',
    type: CARD_TYPES.NORMAL,
  },

  {
    title: 'notion',
    link: 'https://menelaia.notion.site/Menelaia-07b1231434ce46c3926081efe0ef5481',
    icon: faPagelines,
    type: CARD_TYPES.MEDIUM,
    description: 'list of notion templates I use daily',
    image: (
      <StaticImage
        alt="Header"
        className="medium-card__image"
        height={160}
        imgClassName="medium-card__image"
        layout="constrained"
        placeholder="blurred"
        quality={100}
        src="../images/notion.jpg"
      />
    ),
  },
  {
    title: 'github',
    icon: faGithub,
    link: 'https://github.com/menelaia',
    type: CARD_TYPES.NORMAL,
  },
  {
    title: 'current playlist',
    icon: faSpotify,
    src: 'https://open.spotify.com/embed/album/524MIbuattv09j7FW5NVu2?utm_source=generator',
    type: CARD_TYPES.IFRAME,
    height: 80,
  },
  {
    title: 'current favorites',
    icon: faGamepad,
    link: '/favorites',
    externalLink: false,
    type: CARD_TYPES.NORMAL,
  },
];

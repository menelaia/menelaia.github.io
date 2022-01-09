import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const PLAYING = {
  title: '🎮 Currently playing',
  content: [
    {
      title: 'Ruined King: A League of Legends Story™',
      description: 'playing on: Nintendo Switch',
      rating: '⭐⭐⭐⭐⭐/5',
      image: (
        <StaticImage
          alt="Header"
          className="medium-card__image"
          height={160}
          imgClassName="medium-card__image"
          layout="constrained"
          placeholder="blurred"
          quality={100}
          src="../images/favorites/rk.jpg"
        />
      ),
    },
    {
      title: 'Hextech Mayhem: A League of Legends Story™',
      description: 'playing on: PC/Nintendo Switch',
      rating: '💖💖💖💖💖/5',
      image: (
        <StaticImage
          alt="Header"
          className="medium-card__image"
          height={160}
          imgClassName="medium-card__image"
          layout="constrained"
          placeholder="blurred"
          quality={100}
          src="../images/favorites/hm.jfif"
        />
      ),
    },
  ],
};

const WATCHING = {
  title: '📺 Currently watching',
  content: [
    {
      title: 'Euphoria',
      description: 'watching on: HBO',
      rating: '⭐⭐⭐⭐⭐!!!/5',
      image: (
        <StaticImage
          alt="Header"
          className="medium-card__image-contain"
          height={160}
          imgClassName="medium-card__image-contain"
          layout="constrained"
          placeholder="blurred"
          quality={100}
          src="../images/favorites/eu.jpg"
        />
      ),
    },
  ],
};

const READING = {
  title: '📚 Currently reading',
  content: [
    {
      title: 'The Hawthorne Legacy',
      description: 'progress: 41%',
      rating: '⭐⭐⭐⭐/5',
      image: (
        <StaticImage
          alt="Header"
          className="medium-card__image-contain"
          height={160}
          imgClassName="medium-card__image-contain"
          layout="constrained"
          placeholder="blurred"
          quality={100}
          src="../images/favorites/leg.jpg"
        />
      ),
    },
  ],
};

export default [PLAYING, WATCHING, READING];

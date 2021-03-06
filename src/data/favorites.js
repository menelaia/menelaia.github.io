import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const PLAYING = {
  title: 'ð® Currently playing',
  content: [
    {
      title: 'Ruined King: A League of Legends Storyâ¢',
      description: 'playing on: Nintendo Switch',
      rating: 'â­â­â­â­â­/5',
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
      title: 'Hextech Mayhem: A League of Legends Storyâ¢',
      description: 'playing on: PC/Nintendo Switch',
      rating: 'ððððð/5',
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
  title: 'ðº Currently watching',
  content: [
    {
      title: 'Euphoria',
      description: 'watching on: HBO',
      rating: 'â­â­â­â­â­!!!/5',
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
  title: 'ð Currently reading',
  content: [
    {
      title: 'The Hawthorne Legacy',
      description: 'progress: 41%',
      rating: 'â­â­â­â­/5',
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

import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import '../styles/favorites.css';
import { Button, Description, HeaderImage } from '../components';
import { CARD_TYPES } from '../components/card';
import { DESCRIPTION, FAVORITES } from '../data';

export default function FavoritesPage() {
  function renderDescription({ title, image, description: itemDescription, rating }) {
    const description = (
      <div>
        {!!itemDescription && <p>{itemDescription}</p>}
        <p>rating: {rating}</p>
      </div>
    );

    return (
      <Button
        key={title}
        description={description}
        image={image}
        title={title}
        type={CARD_TYPES.MEDIUM}
      />
    );
  }

  function renderSection(section) {
    const { title, content } = section;

    return (
      <div key={title}>
        <h5 className="favorites-page__title">{title}</h5>
        {content.map((item) => renderDescription(item))}
      </div>
    );
  }

  return (
    <div className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Menelaia</title>
        <link href="https://menelaia.github.io/" rel="canonical" />
      </Helmet>
      <HeaderImage />
      <div className="content-container">
        <Description content={DESCRIPTION} />
        {FAVORITES.map((favorite) => renderSection(favorite))}
      </div>
    </div>
  );
}

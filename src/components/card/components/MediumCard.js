import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './style.css';

export default function MediumCard({ image, title, icon, description }) {
  return (
    <div className="medium-card__container">
      {image}
      <div className="medium-card__text-container">
        <span className="medium-card__title-container">
          {!!icon && <FontAwesomeIcon className="medium-card__icon" icon={icon} size="1x" />}
          <p className="medium-card__title">{title}</p>
        </span>
        {!!description && <p className="medium-card__description">{description}</p>}
      </div>
    </div>
  );
}

MediumCard.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.number,
};

MediumCard.defaultProps = {
  description: null,
  icon: null,
};

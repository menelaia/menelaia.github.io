import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './style.css';

function CardIconTitle({ title, icon }) {
  return (
    <>
      {!!icon && <FontAwesomeIcon className="icon-title__icon" icon={icon} size="1x" />}
      {!!title && <p className="icon-title__title">{title}</p>}
    </>
  );
}

CardIconTitle.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
};

CardIconTitle.defaultProps = {
  icon: null,
  title: null,
};

export default React.memo(CardIconTitle);

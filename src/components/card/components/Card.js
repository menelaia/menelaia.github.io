import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import CardIconTitle from './CardIconTitle';

export default function Card({ children, title, icon, bottomTitle }) {
  return (
    <div className="card__container">
      {!bottomTitle && <CardIconTitle icon={icon} title={title} />}
      {children}
      {bottomTitle && <CardIconTitle icon={icon} title={title} />}
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  bottomTitle: PropTypes.bool,
  children: PropTypes.node,
};

Card.defaultProps = {
  bottomTitle: false,
  children: null,
};

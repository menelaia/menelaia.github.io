import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { resolveCardComponent } from '../card/services';

export default function Button({ type, externalLink, link, show, ...otherProps }) {
  if (!show) {
    return null;
  }

  const CardComponent = resolveCardComponent(type);

  if (!externalLink) {
    return (
      <Link to={link}>
        <CardComponent {...otherProps} />
      </Link>
    );
  }

  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <CardComponent {...otherProps} />
    </a>
  );
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  externalLink: PropTypes.bool,
  show: PropTypes.bool,
};

Button.defaultProps = {
  externalLink: true,
  show: true,
};

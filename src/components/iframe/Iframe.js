import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function Iframe({ src, title, height }) {
  return (
    <iframe
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      allowFullScreen=""
      className="iframe__container"
      frameBorder="0"
      height={height}
      src={src}
      title={title}
      width="100%"
    />
  );
}

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Iframe.defaultProps = {
  height: '100%',
};

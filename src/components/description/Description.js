import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export function Description({ content }) {
  return (
    <span className="description">
      {content.map((line) => (
        <p key={line[0]} className="description__line">
          {line}
        </p>
      ))}
    </span>
  );
}

Description.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default React.memo(Description);

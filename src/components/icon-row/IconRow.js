import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './style.css';

function IconRow({ icons }) {
  return icons.map(({ icon, key, link }) => (
    <a
      key={key}
      className="icon-row__icon-container"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon className="icon-row__icon" icon={icon} size="1x" />
    </a>
  ));
}

IconRow.propTypes = {
  icons: PropTypes.array.isRequired,
};

export default React.memo(IconRow);

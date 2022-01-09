import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Iframe from '../../iframe';
import Card from './Card';

export default function IframeCard({ src, title, bottomTitle, icon, height }) {
  return (
    <Card bottomTitle={bottomTitle} icon={icon} title={title}>
      <Iframe height={height} src={src} title={title} />
    </Card>
  );
}

IframeCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bottomTitle: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.object,
};

IframeCard.defaultProps = {
  bottomTitle: true,
  height: '100%',
  icon: null,
};

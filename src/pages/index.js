import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import { Button, Description, HeaderImage, IconRow } from '../components';
import { BUTTON_LINKS, DESCRIPTION, SOCIAL_ICONS } from '../data';

export default function IndexPage() {
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
        <div className="icon-row">
          <IconRow icons={SOCIAL_ICONS} />
        </div>
        <div className="button-container">
          {BUTTON_LINKS.map(({ title, ...otherProps }) => (
            <Button key={title} title={title} {...otherProps} />
          ))}
        </div>
      </div>
    </div>
  );
}

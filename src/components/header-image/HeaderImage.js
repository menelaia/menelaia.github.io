import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './style.css';

export default function HeaderImage() {
  return (
    <div>
      {/* <StaticImage
        alt="Header"
        className="header-background"
        height={170}
        imgClassName="header-background"
        layout="constrained"
        placeholder="blurred"
        quality={90}
        src="../../images/header-bg.png"
      /> */}
      <StaticImage
        alt="Header"
        className="header-image"
        height={160}
        layout="constrained"
        placeholder="blurred"
        quality={100}
        src="../../images/avatar.png"
      />
      <div>
        <h1 className="header-title">menelaia</h1>
      </div>
    </div>
  );
}

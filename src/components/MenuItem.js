import React from 'react';

export default function MenuItem({ href, imageSrc, altText, title }) {
  return (
    <a href={href}>
      <img src={imageSrc} alt={altText} />
      <h2>{title}</h2>
    </a>
  );
}

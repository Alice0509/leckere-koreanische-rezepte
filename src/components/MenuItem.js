import React from 'react';
import Image from 'next/image';

export default function MenuItem({ href, imageSrc, altText, title }) {
  return (
    <a href={href}>
      <Image src={imageSrc} alt={altText} width={500} height={500} />
      <h2>{title}</h2>
    </a>
  );
}

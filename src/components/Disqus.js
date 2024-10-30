// src/components/Disqus.js
import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const Disqus = ({ article }) => {
  return (
    <DiscussionEmbed
      shortname="my-korean-food-site"
      config={{
        url: article.url,          // 현재 페이지의 URL
        identifier: article.id,     // 고유 식별자 (예: 레시피 ID)
        title: article.title,       // 페이지 제목
        language: 'de_DE',         
      }}
    />
  );
};

export default Disqus;

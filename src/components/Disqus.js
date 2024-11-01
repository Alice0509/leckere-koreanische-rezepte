// src/components/Disqus.js
import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const Disqus = ({ id, title }) => {
  const article = {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/recipes/${id}`, // 절대 경로 설정
    id: String(id), // ID를 문자열로 변환
    title: title, // 레시피 제목
  };

  return (
    <DiscussionEmbed
      shortname="my-korean-food-site"
      config={{
        url: article.url,
        identifier: article.id,
        title: article.title,
        language: 'de_DE', // 사용할 언어 설정
      }}
    />
  );
};

export default Disqus;


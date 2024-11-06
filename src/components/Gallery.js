// src/components/Gallery.js
import React, { useState } from 'react';
import styles from './Gallery.module.css'; // 갤러리 스타일
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper 컴포넌트 임포트
import { Navigation, Pagination, Autoplay } from 'swiper'; // Swiper 모듈 임포트
import 'swiper/css'; // Swiper 기본 CSS 임포트
import 'swiper/css/navigation'; // 네비게이션 CSS 임포트
import 'swiper/css/pagination'; // 페이징 CSS 임포트

const Gallery = ({ items, updateItems }) => { // 'updateItems' prop 추가
  const [newComment, setNewComment] = useState('');
  const [commentDishId, setCommentDishId] = useState(null); // 코멘트를 남길 dish의 ID

  const handleCommentSubmit = (id) => {
    if (newComment.trim() === '') return;

    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, comments: [...(item.comments || []), newComment] };
      }
      return item;
    });

    updateItems(updatedItems); // 상위 컴포넌트에 상태 업데이트 함수 호출

    setNewComment('');
    setCommentDishId(null);
  };

  return (
    <div className={styles.gallery}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 15000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {items.map((dish) => (
          <SwiperSlide key={dish.id}>
            <div className={styles.dish}>
              <Image 
                src={dish.image} 
                alt={dish.name} 
                width={500} 
                height={500} 
                className={styles.galleryImage} 
              />
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>
              {commentDishId === dish.id ? (
                <>
                  <input
                    type="text"
                    placeholder="Kommentar hinterlassen"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleCommentSubmit(dish.id)}
                  />
                  <button onClick={() => handleCommentSubmit(dish.id)}>Absenden</button>
                </>
              ) : (
                <button onClick={() => setCommentDishId(dish.id)}>Kommentar hinterlassen</button>
              )}
              <div>
                {dish.comments && dish.comments.map((comment, index) => (
                  <p key={index}>{comment}</p>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;

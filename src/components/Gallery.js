import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.css'; // 갤러리 스타일

const Gallery = () => {
  const [dishes, setDishes] = useState([]); // dishes 배열 상태 정의
  const [newComment, setNewComment] = useState('');
  const [commentDishId, setCommentDishId] = useState(null); // 코멘트를 남길 dish의 ID

  useEffect(() => {
    // gallery.json 파일에서 데이터 가져오기
    fetch('/data/gallery.json') // dishes.json 대신 gallery.json으로 수정
      .then((response) => response.json())
      .then((data) => setDishes(data))
      .catch((error) => console.error('Error fetching dishes:', error));
  }, []);

  const handleCommentSubmit = (id) => {
    if (newComment.trim() === '') return;

    // 코멘트를 해당 dish의 JSON 데이터에 추가하는 로직
    const updatedDishes = dishes.map((dish) => {
      if (dish.id === id) {
        return { ...dish, comments: [...(dish.comments || []), newComment] }; // 기존 코멘트 배열에 추가
      }
      return dish;
    });

    setDishes(updatedDishes);
    setNewComment(''); // 입력 필드 초기화
    setCommentDishId(null); // 코멘트를 남길 dish ID 초기화
  };

  return (
    <div className={styles.gallery}>
      {dishes.map((dish) => (
        <div key={dish.id} className={styles.dish}>
          <img src={dish.image} alt={dish.name} />
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>
          {commentDishId === dish.id ? ( // 현재 코멘트를 남기고 있는 dish인지 확인
            <>
              <input
                type="text"
                placeholder="Kommentar hinterlassen" // 독일어로 수정
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCommentSubmit(dish.id)}
              />
              <button onClick={() => handleCommentSubmit(dish.id)}>Absenden</button> {/* 독일어로 수정 */}
            </>
          ) : (
            <button onClick={() => setCommentDishId(dish.id)}>Kommentar hinterlassen</button> // 독일어로 수정
          )}
          <div>
            {dish.comments && dish.comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

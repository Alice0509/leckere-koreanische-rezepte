import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import MenuCount from '../components/MenuCount'; // MenuCount 컴포넌트 가져오기
import Gallery from '../components/Gallery'; // 갤러리 컴포넌트 가져오기
import styles from './Home.module.css';
import { FaSearch } from 'react-icons/fa';

const Home = () => {
  const [menuItems, setMenuItems] = useState([]); // 메뉴 항목을 상태로 정의
  const [galleryItems, setGalleryItems] = useState([]); // 갤러리 항목 상태 정의
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsToShow = 3;

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch('/data/menuItems.json');
      if (!response.ok) {
        console.error("Failed to fetch menu items");
        return;
      }
      const data = await response.json();
      console.log(data); // 가져온 데이터 출력
      setMenuItems(data); // 가져온 데이터로 상태 업데이트
    };

    const fetchGalleryItems = async () => {
      const response = await fetch('/data/gallery.json'); // gallery.json 파일에서 데이터 가져오기
      if (!response.ok) {
        console.error("Failed to fetch gallery items");
        return;
      }
      const data = await response.json();
      console.log(data); // 가져온 데이터 출력
      setGalleryItems(data); // 가져온 데이터로 상태 업데이트
    };

    fetchMenuItems();
    fetchGalleryItems(); // 갤러리 데이터 가져오기
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % menuItems.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [menuItems.length, itemsToShow]);

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleItems = filteredItems.slice(currentIndex, currentIndex + itemsToShow)
                    .concat(filteredItems.slice(0, currentIndex + itemsToShow - filteredItems.length));

  return (
    <div className={styles.homeContainer}>
      <MenuCount totalMenus={menuItems.length} /> {/* MenuCount 컴포넌트로 총 메뉴 수 표시 */}

      <div id="searchContainer">
        <FaSearch className="icon" />
        <input
          type="text"
          id="searchInput"
          placeholder="Menüelement suchen..." // 검색어 입력 placeholder 텍스트
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Slider visibleItems={visibleItems} />
      {/* 필터링된 메뉴 항목 표시 */}
      <div className="menu-container">
        <div className="menu-list">
          {visibleItems.map((item) => (
            <div key={item.id} className="menu-card">
              <a href={item.link}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 갤러리 컴포넌트 추가 */}
      <h2>Galerie von Gerichten</h2> {/* 갤러리 제목을 독일어로 수정 */}
      <Gallery items={galleryItems} /> {/* 갤러리 컴포넌트에 갤러리 항목 전달 */}
    </div>
  );
};

export default Home;

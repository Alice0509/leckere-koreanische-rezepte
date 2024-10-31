import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import MenuCount from '../components/MenuCount'; // MenuCount 컴포넌트 가져오기
import styles from './Home.module.css';
import { FaSearch } from 'react-icons/fa';

const Home = () => {
  const [menuItems, setMenuItems] = useState([]); // 메뉴 항목을 상태로 정의
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsToShow = 3;

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch('/data/menuItems.json'); // public 폴더의 JSON 파일 경로
      if (!response.ok) {
        console.error("Failed to fetch menu items");
        return;
      }
      const data = await response.json();
      console.log(data); // 가져온 데이터 출력
      setMenuItems(data); // 가져온 데이터로 상태 업데이트
    };

    fetchMenuItems();
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
          placeholder="Menüelement suchen..."
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
    </div>
  );
};

export default Home;

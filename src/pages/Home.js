// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import MenuCount from '../components/MenuCount';
import Gallery from '../components/Gallery';
import styles from './Home.module.css';
import { FaSearch } from 'react-icons/fa';

const Home = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
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
      setMenuItems(data);
    };

    const fetchGalleryItems = async () => {
      const response = await fetch('/data/gallery.json');
      if (!response.ok) {
        console.error("Failed to fetch gallery items");
        return;
      }
      const data = await response.json();
      console.log(data); // 가져온 데이터 출력
      setGalleryItems(data);
    };

    fetchMenuItems();
    fetchGalleryItems();
  }, []);

  useEffect(() => {
    if (menuItems.length === 0) return; // Avoid division by zero

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
      <MenuCount totalMenus={menuItems.length} />

      <div id="searchContainer">
        <FaSearch className="icon" />
        <input
          type="text"
          id="searchInput"
          placeholder="Menüelement suchen..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 메뉴 카드 출력 */}
      <div className={styles.menuContainer}>
        <div className={styles.menuList} style={{ transform: `translateX(-${currentIndex * 220}px)` }}>
          {visibleItems.map((item) => (
            <div key={item.id} className={styles.menuCard}>
              <a href={item.link}>
                <Image src={item.image} alt={item.name} width={200} height={150} />
                <p>{item.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 갤러리 컴포넌트 추가 */}
      <h2>Galerie von Gerichten</h2>
      <Gallery items={galleryItems} updateItems={setGalleryItems} />
    </div>
  );
};

export default Home;

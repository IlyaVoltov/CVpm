import React, { useState } from 'react';
import './Hobby.css';

// Компонент для попапа
function Popup({ content, isVisible }) {
  return (
    isVisible && (
      <div className="popup">
        <span className="popup-content">{content}</span>
      </div>
    )
  );
}

function Hobby() {
  const [hoveredBlock, setHoveredBlock] = useState(null);

  const hobbies = [
    { id: 1, icon: "fas fa-paw", title: "Питомцы", description: "кошка, кот и собака" },
    { id: 2, icon: "fas fa-chess", title: "Шахматы", description: "ELO 1800" },
    { id: 3, icon: "fas fa-book", title: "Саморазвитие", description: "расширяю свой профессиональный стек" },
    { id: 4, icon: "fas fa-gamepad", title: "Видео игры", description: "в курсе последних тенденций" },
    { id: 5, icon: "fas fa-language", title: "Изучение языков", description: "English / Deutsch" }
  ];

  return (
    <section className="detail-section hobbi">
      <div className="detail-title">
        <div className="title-icon">
          <i className="fas fa-heart"></i>
        </div>
        <span>Хобби</span>
      </div>
      <div className="detail-content">
        <div className="outer-frame">
          <ul className="favor-list">
            {hobbies.map(({ id, icon, title, description }) => (
              <li key={id}>
                <i className={icon}></i>
                <div
                  className="hover-container"
                  onMouseEnter={() => setHoveredBlock(id)}
                  onMouseLeave={() => setHoveredBlock(null)}
                >
                  <span>{title}</span>
                  <Popup content={description} isVisible={hoveredBlock === id} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hobby;

import React, { useState } from 'react';
import './Hobby.css';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation

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
  const { t } = useTranslation(); // Получаем функцию t для перевода

  // Список хобби с ключами для перевода
  const hobbies = [
    { id: 1, icon: "fas fa-paw", titleKey: "hobbies.pets", descriptionKey: "hobbies.pets_description" },
    { id: 2, icon: "fas fa-chess", titleKey: "hobbies.chess", descriptionKey: "hobbies.chess_description" },
    { id: 3, icon: "fas fa-book", titleKey: "hobbies.self_development", descriptionKey: "hobbies.self_development_description" },
    { id: 4, icon: "fas fa-gamepad", titleKey: "hobbies.video_games", descriptionKey: "hobbies.video_games_description" },
    { id: 5, icon: "fas fa-language", titleKey: "hobbies.language_learning", descriptionKey: "hobbies.language_learning_description" }
  ];

  return (
    <section className="detail-section hobbi">
      <div className="detail-title">
        <div className="title-icon">
          <i className="fas fa-heart"></i>
        </div>
        <span>{t('hobbies.title')}</span> {/* Перевод заголовка */}
      </div>
      <div className="detail-content">
        <div className="outer-frame">
          <ul className="favor-list">
            {hobbies.map(({ id, icon, titleKey, descriptionKey }) => (
              <li key={id}>
                <i className={icon}></i>
                <div
                  className="hover-container"
                  onMouseEnter={() => setHoveredBlock(id)}
                  onMouseLeave={() => setHoveredBlock(null)}
                >
                  <span>{t(titleKey)}</span> {/* Перевод названия хобби */}
                  <Popup content={t(descriptionKey)} isVisible={hoveredBlock === id} /> {/* Перевод описания хобби */}
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

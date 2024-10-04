import React, { useState } from 'react';
import './Experience.css'; // Файл стилей для Popup

// Компонент для попапа
function Popup({ content, header, isVisible }) {
  return (
    isVisible && (
      <div className="popup">
        <span className="popup-header">{header}</span>
        <span className="popup-content">{content}</span>
      </div>
    )
  );
}

function Experience() {
  // Состояние для отслеживания, на какой элемент наведен курсор
  const [hoveredBlock, setHoveredBlock] = useState(null);

  // Функции для управления наведением на блоки
  const handleMouseEnter = (id) => setHoveredBlock(id);
  const handleMouseLeave = () => setHoveredBlock(null);

  return (
    <section className="detail-section experience">
      <div className="detail-title">
        <div className="title-icon">
          <i className="fas fa-user-tie"></i>
        </div>
        <span>Опыт работы</span>

        {/* Добавляем popup в title-question */}
        <div className="title-question">
          <div className="hover-container"
            onMouseEnter={() => handleMouseEnter('question')}
            onMouseLeave={handleMouseLeave}
          >
            <i className="fa fa-question" aria-hidden="true"></i>
            <Popup
              content={
                <>при наведении курсора на должность, будут отображены обязанности</>
             }
              isVisible={hoveredBlock === 'question'}
            />
          </div>
        </div>
      </div>

      <div className="detail-content">

        {/* Блок 1 */}
        <div className="timeline-block">
          <h1>Менеджер проектов</h1>
          <div
            className="hover-container"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <p>GB Consulting (data-driven solutions)</p>
            <p>Оптимизация процесса взаимодействия между отделами разработки, составление PDP</p>
            <Popup
              header="Обязанности:"
              content={
                <>
                  <br />- Формулирование бизнес-задач (переговоры с клиентами)
                  <br />- Ведение проектной документации
                  <br />- Проведение спринт-ревью
                </>
              }
              isVisible={hoveredBlock === 1}
            />
            <time>2023 - 2024</time>
          </div>
        </div>

        {/* Блок 2 */}
        <div className="timeline-block">
          <h1>Начальник Управления разработки ПО</h1>
          <div
            className="hover-container"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <p>ПАО "Россети Научно-технический центр"</p>
            <p>Разработано 4 крупных проекта, внедрение в 7 крупных компаний</p>
            <Popup
              header="Обязанности:"
              content={
                <>
                  <br />- Организационные задачи
                  <ul>
                    <li>Управление командой разработки</li>
                    <li>Agile (scrum/kanban)</li>
                    <li>Разработка дорожных карт и user-stories</li>
                    <li>Преобразование бизнес-требований в технические задачи</li>
                  </ul>
                  <br />- Технические задачи
                  <ul>
                    <li>Разработка технической стратегии для проекта</li>
                    <li>Выбор технологий и инструментов для проекта</li>
                    <li>Создание систем и алгоритмов для оптимального экспорта и обработки данных</li>
                  </ul>
                </>
              }
              isVisible={hoveredBlock === 2}
            />
            <time>2018 - 2023</time>
          </div>
        </div>

        {/* Блок 3 */}
        <div className="timeline-block">
          <h1>Аналитик данных</h1>
          <div
            className="hover-container"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <p>ПАО "Россети Ленэнерго"</p>
            <p>Внедрение BI-систем, трансформация бизнес-процессов</p>
            <Popup
              header="Обязанности:"
              content={
                <>
                  <br />- Оптимальное планирование и совместная работа в крупной команде
                  <br />- Создание статистических моделей и применение машинного обучения для решения задач
                  <br />- Реализация end-to-end data pipeline от хранилища данных к BI
                </>
              }
              isVisible={hoveredBlock === 3}
            />
            <time>2014 - 2018</time>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
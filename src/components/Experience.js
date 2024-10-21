import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const [hoveredBlock, setHoveredBlock] = useState(null);

  const handleMouseEnter = (id) => setHoveredBlock(id);
  const handleMouseLeave = () => setHoveredBlock(null);

  return (
    <section className="detail-section experience">
      <div className="detail-title">
        <div className="title-icon">
          <i className="fas fa-user-tie"></i>
        </div>
        <span>{t('experience.header')}</span>

        {/* Добавляем popup в title-question */}
        <div className="title-question">
          <div
            className="hover-container"
            onMouseEnter={() => handleMouseEnter('question')}
            onMouseLeave={handleMouseLeave}
          >
            <i className="fa fa-question" aria-hidden="true"></i>
            <Popup
              content={t('experience.popup')}
              isVisible={hoveredBlock === 'question'}
            />
          </div>
        </div>
      </div>

      <div className="detail-content">

        {/* Блок 1 */}
        <div className="timeline-block">
          <h1>{t('experience.role1.title')}</h1>
          <div
            className="hover-container"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <p>{t('experience.role1.company')}</p>
            <p>{t('experience.role1.description')}</p>
            <Popup
              header={t('experience.role1.responsibilities.header')}
              content={
                <>
                  <br />
                  {t('experience.role1.responsibilities.items.0')}
                  <br />
                  {t('experience.role1.responsibilities.items.1')}
                  <br />
                  {t('experience.role1.responsibilities.items.2')}
                </>
              }
              isVisible={hoveredBlock === 1}
            />
            <time>{t('experience.role1.date')}</time>
          </div>
        </div>

        {/* Блок 2 */}
        <div className="timeline-block">
          <h1>{t('experience.role2.title')}</h1>
          <div
            className="hover-container"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <p>{t('experience.role2.company')}</p>
            <p>{t('experience.role2.description')}</p>
            <Popup
              header={t('experience.role2.responsibilities.header')}
              content={
                <>
                  <br />- {t('experience.role2.responsibilities.organizational.0')}
                  <ul>
                    <li>{t('experience.role2.responsibilities.organizational.1')}</li>
                    <li>{t('experience.role2.responsibilities.organizational.2')}</li>
                    <li>{t('experience.role2.responsibilities.organizational.3')}</li>
                    <li>{t('experience.role2.responsibilities.organizational.4')}</li>
                  </ul>
                  <br />- {t('experience.role2.responsibilities.technical.0')}
                  <ul>
                    <li>{t('experience.role2.responsibilities.technical.1')}</li>
                    <li>{t('experience.role2.responsibilities.technical.2')}</li>
                    <li>{t('experience.role2.responsibilities.technical.3')}</li>
                  </ul>
                </>
              }
              isVisible={hoveredBlock === 2}
            />
            <time>{t('experience.role2.date')}</time>
          </div>
        </div>

        {/* Блок 3 */}
        <div className="timeline-block">
          <h1>{t('experience.role3.title')}</h1>
          <div
            className="hover-container"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <p>{t('experience.role3.company')}</p>
            <p>{t('experience.role3.description')}</p>
            <Popup
              header={t('experience.role3.responsibilities.header')}
              content={
                <>
                  <br />- {t('experience.role3.responsibilities.items.0')}
                  <br />- {t('experience.role3.responsibilities.items.1')}
                  <br />- {t('experience.role3.responsibilities.items.2')}
                </>
              }
              isVisible={hoveredBlock === 3}
            />
            <time>{t('experience.role3.date')}</time>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;

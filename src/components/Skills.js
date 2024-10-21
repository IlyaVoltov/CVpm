import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Skills.css';

function SkillSection() {
  const { t } = useTranslation();
  const [hoveredBlock, setHoveredBlock] = useState(null);
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const data = [
      {
        title: t('skills.technicalSkills'),
        skills: [
          { name: t('skills.projectManagement'), description: t('skills.projectManagementDesc'), percentage: '75%' },
          { name: t('skills.softwareLifecycleManagement'), description: t('skills.softwareLifecycleManagementDesc'), percentage: '70%' },
          { name: t('skills.analyticsReporting'), description: t('skills.analyticsReportingDesc'), percentage: '80%' },
          { name: t('skills.backlogManagement'), description: t('skills.backlogManagementDesc'), percentage: '80%' },
        ],
      },
      {
        title: t('skills.softSkills'),
        skills: [
          { name: t('skills.communication'), description: t('skills.communicationDesc'), percentage: '80%' },
          { name: t('skills.leadership'), description: t('skills.leadershipDesc'), percentage: '85%' },
          { name: t('skills.changeManagement'), description: t('skills.changeManagementDesc'), percentage: '80%' },
          { name: t('skills.conflictManagement'), description: t('skills.conflictManagementDesc'), percentage: '85%' },
        ],
      },
    ];

    setSkillsData(data);
  }, [t]);

  useEffect(() => {
    const skillBars = document.querySelectorAll('.skillbar');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            bar.classList.add('animate'); // Добавляем анимацию при попадании в область видимости
            observer.unobserve(bar); // Прекращаем наблюдение после анимации
          }
        });
      },
      { threshold: 0.1 }
    );

    skillBars.forEach((bar) => {
      observer.observe(bar);
    });

    return () => {
      skillBars.forEach((bar) => {
        observer.unobserve(bar);
      });
    };
  }, [skillsData]); // Перезапускаем, если skillsData изменяется

  const Popup = ({ content, isVisible }) => (
    isVisible && (
      <div className="popup" role="tooltip" aria-hidden={!isVisible}>
        <span className="popup-content">{content}</span>
      </div>
    )
  );

  const handleMouseEnter = (block) => {
    setHoveredBlock(block);
  };

  const handleMouseLeave = () => {
    setHoveredBlock(null);
  };

  return (
    <section className="detail-section skills">
      <div className="detail-title">
        <div className="title-icon">
          <i className="fas fa-laptop-code"></i>
        </div>
        <span>{t('skills.title')}</span>
        <div className="title-question">
          <div
            className="hover-container"
            onMouseEnter={() => handleMouseEnter('question')}
            onMouseLeave={handleMouseLeave}
          >
            <i className="fa fa-question" aria-hidden="true"></i>
            <Popup
              content={t('skills.popupContent')}
              isVisible={hoveredBlock === 'question'}
            />
          </div>
        </div>
      </div>

      {skillsData.map(({ title, skills }) => (
        <div className="detail-content" key={title}>
          <h3>{title}</h3>
          <ul className="pg-list">
            {skills.map(({ name, description, percentage }) => (
              <li key={name}>
                <div className="skill-header" role="region" aria-label={`Навык: ${name}`}>
                  <span>{name}</span>
                  <small>{description}</small>
                </div>
                <div className="sb-skeleton">
                  <div
                    className="skillbar"
                    style={{ '--pgbar-length': percentage }}
                  >
                    <span className="percentage-label">{percentage}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default SkillSection;

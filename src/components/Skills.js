import React, { useEffect, useState } from 'react';
import './Skills.css';

function SkillSection() {
  const [hoveredBlock, setHoveredBlock] = useState(null);

  useEffect(() => {
    const skillBars = document.querySelectorAll('.skillbar');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.3 }
    );

    skillBars.forEach((bar) => {
      observer.observe(bar);
    });

    return () => {
      skillBars.forEach((bar) => {
        observer.unobserve(bar);
      });
    };
  }, []);

  // Компонент для попапа
  const Popup = ({ content, header, isVisible }) => {
    return (
      isVisible && (
        <div className="popup" role="tooltip" aria-hidden={!isVisible}>
          <span className="popup-header">{header}</span>
          <span className="popup-content">{content}</span>
        </div>
      )
    );
  };

  const handleMouseEnter = (block) => {
    setHoveredBlock(block);
  };

  const handleMouseLeave = () => {
    setHoveredBlock(null);
  };

  const skillsData = [
    {
      title: 'Технические навыки',
      skills: [
        { name: 'Управление проектами', description: 'успешная реализация проектов с бюджетом до 300 млн. руб.', percentage: '75%' },
        { name: 'Управление жизненным циклом разработки ПО', description: 'внедрение CI/CD', percentage: '70%' },
        { name: 'Аналитика и отчётность', description: 'использование инструментов аналитики', percentage: '80%' },
        { name: 'Управление бэклогом', description: 'поддержка бэклога из 70+ задач', percentage: '80%' },
      ],
    },
    {
      title: 'Софт-скиллы',
      skills: [
        { name: 'Коммуникации', description: 'эффективная коммуникация со всеми участниками проекта', percentage: '80%' },
        { name: 'Лидерство и управление командой', description: 'руководство командами до 15 человек', percentage: '85%' },
        { name: 'Управление изменениями', description: 'реинжиниринг бизнес-процессов Заказчика', percentage: '80%' },
        { name: 'Управление конфликтами', description: 'решение конфликтов через переговоры и компромиссы', percentage: '85%' },
      ],
    },
  ];

  return (
    <section className="detail-section skills">
      <div className="detail-title">
        <div className="title-icon">
          <i className="fas fa-laptop-code"></i>
        </div>
        <span>Основные навыки</span>

        <div className="title-question">
          <div
            className="hover-container"
            onMouseEnter={() => handleMouseEnter('question')}
            onMouseLeave={handleMouseLeave}
          >
            <i className="fa fa-question" aria-hidden="true"></i>
            <Popup
              content="процентные соотношения основаны на личном субъективном восприятии"
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
                  <div className="skillbar" style={{ '--pgbar-length': percentage }}>
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

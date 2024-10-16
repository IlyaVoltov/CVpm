// src/components/LeftColumn.js
import React from 'react';
import './LeftColumn.css';

function LeftColumn() {
    return (
        <div className="left-column">
            <div className="profile">
                <img src={`${process.env.PUBLIC_URL}/short_photo.jpg`} alt="Short photo" className="profile-photo" />
                <h1>Илья Волтов</h1>
                <div className="position">Менеджер проектов<br />Product owner</div>
            </div>

            <section className="about-section">
                <div className="title">
                    <h2>О себе</h2>
                    <p>Высокомотивированный и ответственный менеджер проектов с 10-летним опытом управления и координации разработки.</p>
                </div>
            </section>

            <section className="contact-section">
                <div className="title">
                    <h2>Контакты</h2>
                    <div className="info-section">
                        <div className="info-section link">
                            <i className="fas fa-envelope"></i>
                            <a target="_blank" rel="noopener noreferrer" href="mailto:ivoltovp@gmail.com">
                                <span>ivoltovp@gmail.com</span>
                            </a>
                        </div>
                        <div className="info-section link">
                            <i className="fab fa-linkedin"></i>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ilya-voltov-b44b49207">
                                <span>ilya-voltov</span>
                            </a>
                        </div>
                        <div className="info-section link">
                            <i className="fab fa-telegram-plane"></i>
                            <a target="_blank" rel="noopener noreferrer" href="https://t.me/IliaVoltov">
                                <span>Iliya Voltov</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="intro-stack">
                <div className="parent-container">
                    <h1 className="title">Технологический стек</h1>
                    <div className="techStack">
                        <ul>
                            <li><i className="fas fa-code"></i>C#; Python; JS</li>
                            <li><i className="fas fa-laptop-code"></i>React; .NET; CatBoost</li>
                            <li><i className="fas fa-database"></i>PostgreSQL; ClickHouse; MongoDB</li>
                            <li><i className="fas fa-server"></i>Docker; Kubernetes; Jenkins</li>
                            <li><i className="fas fa-globe"></i>Swagger (работа с API)</li>
                            <li><i className="fas fa-tasks"></i>Apache Airflow</li>
                            <li><i className="fas fa-code-branch"></i>GIT</li>
                            <li><i className="fab fa-figma"></i>Figma</li>
                        </ul>
                        <h4>Методологии</h4>
                        <ul><li><i className="fas fa-chart-line"></i>Agile (Scrum, Kanban)</li></ul>
                        <h4>Инструменты управления</h4>
                        <ul><li><i className="fas fa-tools"></i>JetBrains Space; Jira</li></ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LeftColumn;

import React from 'react';
import './LeftColumn.css';
import { useTranslation } from 'react-i18next';

function LeftColumn() {
    const { t } = useTranslation();

    const position = t('position');

    return (
        <div className="left-column">
            <div className="profile">
                <img src={`${process.env.PUBLIC_URL}/short_photo.jpg`} alt="Short photo" className="profile-photo" />
                <h1>{t('name')}</h1>
                <div className="position" dangerouslySetInnerHTML={{ __html: position }} />
            </div>

            <section className="about-section">
                <div className="title">
                    <h2>{t('about.title')}</h2>
                    <p>{t('about.description')}</p>
                </div>
            </section>

            <section className="contact-section">
                <div className="title">
                    <h2>{t('contacts.title')}</h2>
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
                                <span>Ilya Voltov</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="intro-stack">
                <div className="parent-container">
                    <h1 className="title">{t('tech_stack.title')}</h1>
                    <div className="techStack">
                        <ul>
                            <li><i className="fas fa-code"></i>{t('tech_stack.languages')}</li>
                            <li><i className="fas fa-laptop-code"></i>{t('tech_stack.frameworks')}</li>
                            <li><i className="fas fa-database"></i>{t('tech_stack.databases')}</li>
                            <li><i className="fas fa-server"></i>{t('tech_stack.tools')}</li>
                            <li><i className="fas fa-globe"></i>{t('tech_stack.api')}</li>
                            <li><i className="fas fa-tasks"></i>{t('tech_stack.airflow')}</li>
                            <li><i className="fas fa-code-branch"></i>{t('tech_stack.git')}</li>
                            <li><i className="fab fa-figma"></i>{t('tech_stack.figma')}</li>
                        </ul>
                        <h4>{t('methodologies.title')}</h4>
                        <ul><li><i className="fas fa-chart-line"></i>{t('methodologies.agile')}</li></ul>
                        <h4>{t('management_tools.title')}</h4>
                        <ul><li><i className="fas fa-tools"></i>{t('management_tools.tools')}</li></ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LeftColumn;

import React from 'react';
import { useTranslation } from 'react-i18next';

function Education() {
    const { t } = useTranslation();

    return (
        <section className="detail-section edu">
            <div className="detail-title">
                <div className="title-icon">
                    <i className="fas fa-user-graduate"></i>
                </div>
                <span>{t('education.title')}</span>
            </div>
            <div className="detail-content">
                <div className="timeline-block">
                    <h1>{t('education.degree1.title')}</h1>
                    <p>{t('education.degree1.university')}</p>
                    <p>{t('education.degree1.degree')}</p>
                    <time>{t('education.degree1.years')}</time>
                </div>
                <div className="timeline-block">
                    <h1>{t('education.degree2.title')}</h1>
                    <p>{t('education.degree2.university')}</p>
                    <p>{t('education.degree2.degree')}</p>
                    <time>{t('education.degree2.years')}</time>
                </div>
            </div>
        </section>
    );
}

export default Education;

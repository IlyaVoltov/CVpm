// src/Topbar.js
import React, { useState, useEffect } from 'react';
import './TopBar.css';
import FeedbackForm from './Feedback';
import Modal from './Modal';
import { Projects, Courses, Conferences } from './Data';
import { useTranslation } from 'react-i18next';

const TopBar = () => {
    const { i18n, t } = useTranslation();
    const [isModalOpen, setModalOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null);
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    // Функция для открытия/закрытия модального окна
    const toggleModal = () => setModalOpen(!isModalOpen);
    const openModal = (modalType) => setActiveModal(modalType);
    const closeModal = () => setActiveModal(null);

    // Функция для переключения языка
    const switchLanguage = (lng) => {
        console.log("Switching language to:", lng);
        i18n.changeLanguage(lng);
        setCurrentLanguage(lng);
        localStorage.setItem('i18nextLng', lng); // Сохраняем язык в localStorage
    };

    // Генерация контента модального окна
    const generateModalContent = (title, items) => (
        <>
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className={item.className || ''}>
                        {item.name}
                        {item.details && item.details.length > 0 && (
                            <ul>
                                {item.details.map((detail, idx) => (
                                    <li key={idx} className={detail.className || ''} dangerouslySetInnerHTML={{ __html: detail.text }} />
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );

    // Эффект для установки языка из localStorage
    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
            setCurrentLanguage(savedLanguage);
        }
    }, [i18n]);

    // Закрываем модалы при смене языка
    useEffect(() => {
        setActiveModal(null);
    }, [currentLanguage]);

    return (
        <div className="top-bar">
            <div className="nav-menu">
                <ul>
                    <div className="list">
                        <li>
                            <a onClick={() => openModal('projects')} className="modal-button">
                                <i className="fas fa-project-diagram"></i> {t('topBar.my_projects')}
                            </a>
                            <Modal isOpen={activeModal === 'projects'} onClose={closeModal}>
                                {generateModalContent(t('topBar.my_projects'), Projects())}
                            </Modal>
                        </li>
                        <li>
                            <a onClick={() => openModal('courses')} className="modal-button">
                                <i className="fas fa-book"></i> {t('topBar.courses')}
                            </a>
                            <Modal isOpen={activeModal === 'courses'} onClose={closeModal}>
                                {generateModalContent(t('topBar.courses'), Courses())}
                            </Modal>
                        </li>
                        <li>
                            <a onClick={() => openModal('conferences')} className="modal-button">
                                <i className="fas fa-certificate"></i> {t('topBar.conferences')}
                            </a>
                            <Modal isOpen={activeModal === 'conferences'} onClose={closeModal}>
                                {generateModalContent(t('topBar.conferences'), Conferences())}
                            </Modal>
                        </li>
                        <li>
                            <a href={currentLanguage === 'en' ? "/CVs/en.pdf" : "/CVs/ru.pdf"} className="modal-button">
                                <i className="fas fa-file-pdf"></i> {t('topBar.download_resume')}
                            </a>
                        </li>
                        <li>
                            <a className="modal-button" onClick={toggleModal}>
                                <i className="fas fa-envelope"></i> {t('topBar.contact_me')}
                            </a>
                        </li>
                        <li>
                            <a className="modal-button" onClick={() => switchLanguage(currentLanguage === 'ru' ? 'en' : 'ru')}>
                                <i className="fas fa-globe"></i> {currentLanguage === 'ru' ? 'Switch to English' : 'Русский язык'}
                            </a>
                        </li>
                    </div>
                </ul>
            </div>

            {isModalOpen && <FeedbackForm isOpen={isModalOpen} onClose={toggleModal} />}
        </div>
    );
};

export default TopBar;

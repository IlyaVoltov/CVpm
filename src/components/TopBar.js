// src/components/TopBar.js
import React, { useState } from 'react';
import './TopBar.css';
import FeedbackForm from './Feedback'; // Импортируем компонент FeedbackForm
import Modal from './Modal'; // Импортируем модальный компонент
import { projects, courses, conferences } from './Data'; // Импортируем данные

const TopBar = () => {
    const [isModalOpen, setModalOpen] = useState(false); // Состояние для управления модальным окном
    const [activeModal, setActiveModal] = useState(null); // Состояние для активного модального окна

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const openModal = (modalType) => setActiveModal(modalType);
    const closeModal = () => setActiveModal(null);

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

    return (
        <div className="top-bar">
            <div className="nav-menu">
                <ul>
                    <div className="list">
                    <li>
                        <a onClick={() => openModal('projects')} className="modal-button">
                            Мои проекты
                        </a>
                        <Modal isOpen={activeModal === 'projects'} onClose={closeModal}>
                            {generateModalContent('Мои проекты', projects)}
                        </Modal>
                    </li>
                    <li>
                        <a onClick={() => openModal('courses')} className="modal-button">
                            Курсы
                        </a>
                        <Modal isOpen={activeModal === 'courses'} onClose={closeModal}>
                            {generateModalContent('Курсы', courses)}
                        </Modal>
                    </li>
                    <li>
                        <a onClick={() => openModal('conferences')} className="modal-button">
                            Конференции
                        </a>
                        <Modal isOpen={activeModal === 'conferences'} onClose={closeModal}>
                            {generateModalContent('Конференции', conferences)}
                        </Modal>
                    </li>
                    <li>
                        <a href="/certificates/Voltov.pdf" className="modal-button">
                            Скачать резюме
                        </a>
                    </li>
                    <li>
                        <a className="modal-button" onClick={toggleModal}>
                            Написать мне
                        </a>
                    </li>
                    </div>
                </ul>
            </div>

            {/* Модальное окно с формой обратной связи */}
            {isModalOpen && <FeedbackForm isOpen={isModalOpen} onClose={toggleModal} />}
        </div>
    );
};

export default TopBar;
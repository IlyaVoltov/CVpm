import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Modal from './Modal'; // Подключаем модальный компонент
import './Feedback.css'; // Подключаем стили для кнопок и формы
import './Modal.css';
import { useTranslation } from 'react-i18next'; // Подключаем хук для перевода

const FeedbackForm = ({ isOpen, onClose }) => {
  const { t } = useTranslation(); // Инициализируем хук перевода
  const form = useRef();
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Проверка наличия переменных среды
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      console.error('Не установлены необходимые переменные среды для EmailJS');
      setToastMessage(t('feedback.errorSettings')); // Используем перевод для сообщения об ошибке
      setShowToast(true);
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        setToastMessage(t('feedback.successMessage')); // Используем перевод для сообщения об успешной отправке
        setShowToast(true);
        setTimeout(() => {
          onClose();
          setIsSubmitting(false);
        }, 1500);
      })
      .catch((error) => {
        setToastMessage(t('feedback.errorMessage')); // Используем перевод для сообщения об ошибке
        setShowToast(true);
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2>{t('feedback.title')}</h2> {/* Перевод заголовка */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder={t('feedback.namePlaceholder')} required /> {/* Перевод плейсхолдера */}
          <input type="email" name="user_email" placeholder={t('feedback.emailPlaceholder')} required /> {/* Перевод плейсхолдера */}
          <textarea name="message" placeholder={t('feedback.messagePlaceholder')} required /> {/* Перевод плейсхолдера */}
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? t('feedback.sending') : t('feedback.send')} {/* Перевод текста кнопки */}
          </button>
        </form>
        {showToast && (
          <div className="toast-message">
            {toastMessage}
          </div>
        )}
      </Modal>
    </>
  );
};

export default FeedbackForm;

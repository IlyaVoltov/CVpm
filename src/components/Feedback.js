import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Modal from './Modal'; // Подключаем модальный компонент
import './Feedback.css'; // Подключаем стили для кнопок и формы
import './Modal.css';

const FeedbackForm = ({ isOpen, onClose }) => {
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
      setToastMessage('Ошибка настройки отправки. Пожалуйста, свяжитесь с администратором.');
      setShowToast(true);
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        setToastMessage('Ваше сообщение отправлено! Я Вам отвечу в течение суток.');
        setShowToast(true);
        setTimeout(() => {
          onClose();
          setIsSubmitting(false);
        }, 1500);
      })
      .catch((error) => {
        setToastMessage('Ошибка. Повторите попытку позже.');
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
        <h2>Напишите мне</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Ваше имя" required />
          <input type="email" name="user_email" placeholder="Ваш email" required />
          <textarea name="message" placeholder="Ваше сообщение" required />
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Отправить'}
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

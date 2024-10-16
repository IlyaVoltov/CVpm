import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Modal from './Modal'; // Подключаем модальный компонент
import './Feedback.css'; // Подключаем стили для кнопок и формы
import './Modal.css';

const FeedbackForm = ({ isOpen, onClose }) => {
  const form = useRef();
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log(result.text);
        setToastMessage('Ваше сообщение отправлено! Я Вам отвечу в течение суток.');
        setShowToast(true); // Устанавливаем showToast в true
        console.log('showToast должен быть теперь true:', true); // Логируем новое состояние

        // Закрываем модальное окно после успешной отправки
        setTimeout(() => {
          onClose();
        }, 0); // Используем setTimeout для отложенного вызова
      }, (error) => {
        console.log(error.text);
        setToastMessage('Ошибка. Повторите попытку позже.');
        setShowToast(true); // Устанавливаем showToast в true
        console.log('showToast должен быть теперь true:', true); // Логируем новое состояние

        // Закрываем модальное окно после неудачи
        setTimeout(() => {
          onClose();
        }, 0); // Используем setTimeout для отложенного вызова
      });
  };

  // Таймер для автоматического скрытия Toast через 3 секунды
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); // Показывать уведомление 3 секунды

      return () => clearTimeout(timer); // Очистить таймер при размонтировании
    }
  }, [showToast]);

  // Проверка состояния showToast
  console.log('showToast:', showToast); // Это выведет текущее состояние showToast

  return (
    <>
      {/* Модальное окно с формой обратной связи */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2>Напишите мне</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Ваше имя" required />
          <input type="email" name="user_email" placeholder="Ваш email" required />
          <textarea name="message" placeholder="Ваше сообщение" required />
          <button type="submit" className="submit-button">Отправить</button>
        </form>
        {showToast && <p>{toastMessage}</p>} {/* Вывод сообщения без Toast */}
      </Modal>
    </>
  );
};

export default FeedbackForm;

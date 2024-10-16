import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from './Modal'; // Подключаем модальный компонент
import './Feedback.css'; // Подключаем стили для кнопок и формы
import './Modal.css';
import Toast from './Toast'; // Подключаем Toast

const FeedbackForm = ({ isOpen, onClose }) => { // Принимаем props
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
        setShowToast(true);
        onClose(); // Закрыть модальное окно после успешной отправки
      }, (error) => {
        console.log(error.text);
        setToastMessage('Ошибка. Повторите попытку позже.');
        setShowToast(true);
      });
  };

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
      </Modal>

      {/* Кастомное уведомление */}
      {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
    </>
  );
};

export default FeedbackForm;

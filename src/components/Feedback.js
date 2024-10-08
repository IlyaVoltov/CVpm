import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from './Modal'; // Подключаем модальный компонент
import './Download.css'; // Подключаем стили для кнопок и формы
import './Modal.css';
import Toast from './Toast'; // Подключаем Toast

const FeedbackForm = () => {
  const form = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
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
        setModalOpen(false); // Закрыть модальное окно после успешной отправки
      }, (error) => {
        console.log(error.text);
        setToastMessage('Ошибка. Повторите попытку позже.');
        setShowToast(true);
      });
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <>
      {/* Кнопка для открытия модального окна */}
      <div className="download-section">
        <div className="button-container">
          <div className="download-button" onClick={toggleModal}>
            Написать мне
          </div>
        </div>
      </div>

      {/* Модальное окно с формой обратной связи */}
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>Напишите мне</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Ваше имя" required />
          <input type="email" name="user_email" placeholder="Ваш email" required />
          <textarea name="message" placeholder="Ваше сообщение" required />
          <button type="submit" className="submit-button">Отправить</button>
        </form>
      </Modal>

      {/* Кастомное уведомление */}
      {showToast && <Toast message={toastMessage} onClose={closeToast} />}
    </>
  );
};

export default FeedbackForm;

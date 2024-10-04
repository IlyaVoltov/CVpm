import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Modal.css';

const FeedbackForm = () => {
  const form = useRef();
  const [isModalOpen, setModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wa9d4xj', 'template_4q7hatv', form.current, 'n6oF9a_FFDgPU6VLy')
      .then((result) => {
        console.log(result.text);
        alert('Ваше сообщение отправлено! Я Вам отвечу в течение суток.');
        setModalOpen(false); // Закрыть модальное окно после успешной отправки
      }, (error) => {
        console.log(error.text);
        alert('Ошибка. Повторите попытку позже.');
      });
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <button onClick={toggleModal}>Написать мне</button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleModal}>&times;</button>
            <h2>Напишите мне</h2>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Ваше имя" required />
              <input type="email" name="user_email" placeholder="Ваш email" required />
              <textarea name="message" placeholder="Ваше сообщение" required />
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackForm;

import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, closeOnBackdropClick = true, children }) => {
  // Закрытие при нажатии на Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    // Убираем обработчик после закрытия модального окна
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Устанавливаем фокус на кнопку закрытия при открытии окна
  useEffect(() => {
    if (isOpen) {
      const closeButton = document.querySelector('.close-button');
      if (closeButton) closeButton.focus();
    }
  }, [isOpen]);

  // Если модальное окно закрыто, не рендерим его
  if (!isOpen) return null;

  return (
    <div className="modal-overlay show" onClick={closeOnBackdropClick ? onClose : undefined}>
      <div className="modal show" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="close-button"
          aria-label="Закрыть модальное окно"
          tabIndex="0"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
import React, { useEffect, useCallback } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, closeOnBackdropClick = true, children }) => {
  // Закрытие при нажатии на Escape
  const handleEscape = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);

    // Убираем обработчик после закрытия модального окна
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);

  // Если модальное окно закрыто, не рендерим его
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay show"
      onClick={closeOnBackdropClick ? onClose : undefined}
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-content"
    >
      <div className="modal show" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="close-button"
          aria-label="Закрыть модальное окно"
          tabIndex="0"
        >
          X
        </button>
        <div id="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

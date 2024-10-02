import React, { useState } from 'react';
import './Download.css';
import Modal from './Modal';

function Download() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="download-section">
      <div className="button-container">
        <a href="/certificates/Voltov.pdf" download className="download-button">
          Скачать резюме
        </a>
      </div>
    </div>
  );
}

export default Download;
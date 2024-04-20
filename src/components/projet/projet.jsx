import React, { useState } from 'react';
import Modal from 'react-modal';
import cv from '../../assets/doc/CV_PORTFOLIO.jpg';

// Assurez-vous de définir appElement pour respecter les directives d'accessibilité
Modal.setAppElement('#root');

function ModalApp() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Mon CV</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        overlayClassName="Overlay"
      >
        <button className='close_button' onClick={() => setModalIsOpen(false)}>Fermer</button>
        <h2>Mon CV</h2>
        <img src={cv} alt='CV de Melissa Faugère'/>
        
      </Modal>
    </div>
  );
}

export default ModalApp;

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import cv from '../../assets/doc/CV_PORTFOLIO.jpg';
import './modal.scss';

Modal.setAppElement('#root');

function ModalApp() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 600); 
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add('modal_open');
    } else {
      document.body.classList.remove('modal_open');
    }
  }, [modalIsOpen]);

  return (
    <div>
      {isMobile ? (
        <a className='modal_button_download' href={cv} download>
          Télécharger mon CV
        </a>
      ) : (
        <button onClick={() => setModalIsOpen(true)}>Mon CV</button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        overlayClassName="Overlay"
      >
        
        <button className='close_button' onClick={() => setModalIsOpen(false)}><span class="X"></span>
  <span class="Y"></span></button>
        <div className='modal_content'>
        <img src={cv} alt='CV de Melissa Faugère' className='modal_image'/>
        </div>
      </Modal>
    </div>
  );
}

export default ModalApp;
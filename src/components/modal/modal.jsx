import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import cv from '../../assets/doc/CV_PORTFOLIO.jpg';
import './modal.scss';

// Assurez-vous de définir appElement pour respecter les directives d'accessibilité
Modal.setAppElement('#root');

function ModalApp() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur est sur un appareil mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768 pixels pour tablettes et desktops
    };

    // Appeler la fonction checkIsMobile lors du chargement initial et lors du redimensionnement de la fenêtre
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    // Nettoyage des événements lors du démontage du composant
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    // Ajouter une classe au corps du document pour désactiver le défilement lorsque la modale est ouverte
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
          Télécharger le CV
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
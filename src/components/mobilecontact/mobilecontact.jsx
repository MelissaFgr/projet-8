import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './mobilecontact.scss';

const MobileContact = () => (
  <div className="contact_info">
    <div className="contact_info_item">
      <a href="https://github.com/melissafgr"><FontAwesomeIcon icon={faGithub} size='4x' color='#DF8E32'/></a>
    </div>
    <div className="contact_info_item">
      <a href="https://fr.linkedin.com/in/melissa-faugere"><FontAwesomeIcon icon={faLinkedin} size='4x' color='#012549'/></a>
    </div>
    <div className="contact_info_item">
      <a href='mailto:melissafaugere@gmail.com'><FontAwesomeIcon icon={faEnvelopesBulk} size='4x' color='#00AB8B'/></a>
      <span>Email : melissafaugere@gmail.com</span>
      <span>Téléphone : +33 6 23 66 30 65</span>
    </div>
  </div>
);

export default MobileContact;
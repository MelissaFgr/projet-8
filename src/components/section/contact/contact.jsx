import React, { useEffect } from 'react';
import Banner from '../../banner/banner';
import bannerImage from '../../../assets/images/black_background.png';
import CardContact from '../../cardContact/cardContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons'; // Import de faHtml5 depuis free-solid-svg-icons
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './contact.scss';

const Contact = () => (
    <section id='contact'>
    <Banner title='Contact' bannerBackground={bannerImage}/>
    <div id='contact_container'>
    <CardContact className='card_contact'/>
    </div>
    </section>
  );

  export default Contact;
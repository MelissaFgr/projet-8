import React, { useEffect } from 'react';
import Banner from '../../banner/banner';
import bannerImage from '../../../assets/images/black_background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons'; // Import de faHtml5 depuis free-solid-svg-icons
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './contact.scss';

const Contact = () => (
    <section id='contact'>
    <Banner title='Contact' bannerBackground={bannerImage}/>
    <div id='contact_container'>
      <div id='contact_container_links'>
    <Link to={'https://github.com/melissafgr'} target='_blank' rel="noopener noreferrer" className='contact_container_github'><FontAwesomeIcon id='contact_container_github_icon' icon={faGithub} color="black" size='4x'/></Link>
    <Link to={'https://fr.linkedin.com/in/melissa-faugere'} target='_blank' rel="noopener noreferrer" className='contact_container_linkedin'><FontAwesomeIcon id='contact_container_linkedin_icon' icon={faLinkedin} color="darkblue" size='4x'/></Link>
    <Link to={'mailto:melissafaugere@gmail.com'} target='_blank' rel='noopener noreferrer' className='tooltip'><FontAwesomeIcon id='tooltipbutton' icon={faEnvelopesBulk} color="lightgray" size='4x'/><div className='tooltiptext'>melissafaugere@gmail.com</div></Link>
    </div>
    </div>
    </section>
  );

  export default Contact;
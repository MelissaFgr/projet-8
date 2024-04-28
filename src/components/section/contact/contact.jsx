import React, { useEffect } from 'react';
import Banner from '../../banner/banner';
import bannerImage from '../../../assets/images/black_background.avif';
import CardContact from '../../cardContact/cardContact';
import MobileContact from '../../mobilecontact/mobilecontact';

import { Link } from 'react-router-dom';
import './contact.scss';

const Contact = () => (
    <section id='contact'>
    <Banner title='Contact' bannerBackground={bannerImage}/>
    <div id='contact_container'>
    <div className='desktop_contact'><CardContact className='card_contact'/></div>
    <div className='mobile_contact'><MobileContact className='card_contact'/></div>
    </div>
    </section>
  );

  export default Contact;
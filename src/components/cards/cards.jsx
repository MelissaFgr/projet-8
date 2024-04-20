import React from 'react';
import { Link } from 'react-router-dom';
import './cards.scss';

const Card = ({ title, content, url, cover }) => (
  <Link to={`${url}`} target='_blank' rel="noopener noreferrer" className='card' style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', objectFit: 'cover' }}>
    <h3 className='card_title'>{title}</h3>
    <p className='card_content'>{content}</p>
  </Link>
);

export default Card;
import React from 'react';
import { Link } from 'react-router-dom';
import './cards.scss';

const Card = ({ title, content, url, cover, subtitle, description, warning }) => (
  <div>
    <Link to={`${url}`} target='_blank' rel="noopener noreferrer" className='card' style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'start', backgroundRepeat: 'no-repeat', objectFit: 'cover' }}>
    </Link>
    <h3 className='card_title'>{title}</h3>
    <h3 className='card_title'>{subtitle}</h3>
    <p className='card_content'>{description}</p>
    <p className='card_content'>{content}</p>
    <p className='card_content'>{warning}</p>
  </div>

);

export default Card;
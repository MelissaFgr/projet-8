import React from 'react';
import { Link } from 'react-router-dom';
import './cards.scss';

const Card = ({ title, content, url }) => (
  <Link to={`${url}`} target='_blank' rel="noopener noreferrer" className='card'>
    <h3 className='card_title'>{title}</h3>
    <p className='card_content'>{content}</p>
  </Link>
);

export default Card;
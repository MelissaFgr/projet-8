import React from 'react';
import './banner.scss';

const Banner = ({ title, bannerBackground }) => (
  <div id='banner'>
    <p id='banner_title'>{title}</p>
    <div id='banner_image_div'></div>
    <img src={bannerBackground} alt="Image de la banniere" id='banner_image' />
  </div>
);

export default Banner;
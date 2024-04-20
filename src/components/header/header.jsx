import React from 'react';
import './header.scss';
import ModalApp from '../modal/modal';
import HeaderNav from './headerNav';


const Header = ({ title, headerBackground }) => (
  <header id='header'>
    <HeaderNav/>
    <p id='header_title'>{title}</p>
    {/*<div id='banner_image_div'></div>
    <img src={headerBackground} alt="Image du header" id='header_image' />*/}
    <div id='header_button'>
        <a href='#contact'>Me contacter</a>
        <div id='header_button_modal'>
            <ModalApp />
        </div>
    </div>
</header>
);

export default Header;
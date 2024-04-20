import React, { useState, useEffect } from 'react';
import './headerNav.scss';

const HeaderNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`headernav ${scrolled ? 'scrolled' : ''}`}>
      <nav className='headernav_nav'>
        <a href="/#presentation">Présentation</a>
        <a href="/#competences">Compétences</a>
        <a href="/#portfolio">Portfolio</a>
        <a href="/#contact">Contact</a>
      </nav>
    </div>
  );
};

export default HeaderNav;

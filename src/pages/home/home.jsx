import React, { useEffect } from 'react';

import Header from '../../components/header/header';
import Presentation from '../../components/section/presentation/presentation';
import Competences from '../../components/section/competences/competences';
import Portfolio from '../../components/section/portfolio/portfolio';
import Contact from '../../components/section/contact/contact';
import './home.scss'

const Home = () => {
  useEffect(() => {
    document.title = 'Mélissa Faugère - Développeuse Web Junior';
  }, []);

  return (
    <div>
      <Header title="Mélissa Faugère - Développeuse Web Junior" />
      <Presentation/>
      <Competences/>
      <Portfolio/>
      <Contact/>
    </div>  
  );
};

export default Home;
import React, { useEffect } from 'react';
import Banner from '../../components/banner/banner';
import Section from '../../components/section/presentation/presentation';
import bannerImage from '../../assets/images/black_background.png';

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
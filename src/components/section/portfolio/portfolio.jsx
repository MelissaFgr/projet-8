import React, { useEffect } from 'react';
import Banner from '../../banner/banner';
import bannerImage from '../../../assets/images/black_background.png';
import projetsData from '../../../assets/doc/projets.json';
import Card from '../../cards/cards';
import './portfolio.scss'
import imgP1 from '../../../assets/images/projet_1.png';
import imgP2 from '../../../assets/images/projet_2.png';
import imgP5 from '../../../assets/images/Projet_5.png';
import imgP6 from '../../../assets/images/Projet_6.png';
/*import imgP7 from '../../../assets/images/Projet_7.png';*/

const Portfolio = () => (
    <section id='portfolio'>
    <Banner title='Portfolio' bannerBackground={bannerImage}/>
    <div className='portfolio_cards'>
        {projetsData.map(({ title, content, url, cover }) => (
          console.log ({cover}),
          <Card key={title} title={title} content={content} url={url} cover={cover}/>
        ))}
      </div>
    </section>
  );

  export default Portfolio;
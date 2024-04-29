import React, { useEffect } from 'react';
import Banner from '../../banner/banner';
import bannerImage from '../../../assets/images/black_background.avif';
import projetsData from '../../../assets/doc/projets.json';
import Card from '../../cards/cards';
import './portfolio.scss'

const Portfolio = () => (
    <section id='portfolio'>
    <Banner title='Portfolio' bannerBackground={bannerImage}/>
    <div className='portfolio_cards'>
        {projetsData.map(({ title, content, url, cover, subtitle, description, warning }) => (
          console.log ({cover}),
          <Card key={title} title={title} content={content} url={url} cover={cover} subtitle={subtitle} description={description} warning={warning}/>
        ))}
      </div>
    </section>
  );

  export default Portfolio;
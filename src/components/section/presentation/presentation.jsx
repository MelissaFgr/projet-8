import React, { useEffect } from 'react';
import Banner from '../../banner/banner';
import FileReader from '../../fileReader/fileReader';
import bannerImage from '../../../assets/images/black_background.avif';
import profilePicture from '../../../assets/images/photo_profile.avif';
import './presentation.scss'

import filePath from '../../../assets/doc/presentation.txt';

const Presentation = () => (
  <section id='presentation'>
    <div id='presentation_content'>
      <img id='presentation_content_image' src={profilePicture} alt='Photo de profile Melissa Faugère'/>
      <div id='presentation_content_filereader'><FileReader classname='filereader_class' filePath={filePath} /></div>
    </div>
  </section>
);

export default Presentation;
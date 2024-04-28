import React from 'react';
import Banner from '../../banner/banner';
import './competences.scss';
import bannerImage from '../../../assets/images/black_background.avif';
import FileReader from '../../../components/fileReader/fileReader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faGear } from '@fortawesome/free-solid-svg-icons'; // Import de faHtml5 depuis free-solid-svg-icons
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';


import fileFront from '../../../assets/doc/frontend.txt';
import fileBack from '../../../assets/doc/backend.txt';
import fileTools from '../../../assets/doc/outils.txt';

const Competences = () => (
  <section id='competences'>
    <Banner title='Compétences' bannerBackground={bannerImage}/>
    <div id='competences_content'>
      <div id='competences_content_front'>
        <FontAwesomeIcon id='competences_content_front_icon' icon={faHtml5} color="#DF8E32" size='4x'/>
        <h2 id='competences_content_front_title'>Front-End</h2>
        <div id='competences_content_front_filereader'>
          <FileReader filePath={fileFront} />
        </div>
      </div>
      <div id='competences_content_back'>
        <FontAwesomeIcon id='competences_content_back_icon' icon={faDatabase} color="#012549" size='4x'/>
        <h2 id='competences_content_back_title'>Back-End</h2>
        <div id='competences_content_back_filereader'>
          <FileReader filePath={fileBack} />
        </div>
      </div>
      <div id='competences_content_tools'>
        <FontAwesomeIcon id='competences_content_tools_icon' icon={faGear} color="#00AB8B" size='4x'/>
        <h2 id='competences_content_tools_title'>Outils</h2>
        <div id='competences_content_tools_filereader'>
          <FileReader filePath={fileTools} />
        </div>
      </div>
    </div>
  </section>
);

export default Competences;

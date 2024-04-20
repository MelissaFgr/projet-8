import React, { useEffect, useState } from 'react';

const TextComponent = ({ filePath }) => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    // Fonction pour charger le contenu du fichier
    const loadFileContent = async () => {
      try {
        const response = await fetch(filePath);
        const text = await response.text();
        setFileContent(text);
      } catch (error) {
        console.error('Erreur lors du chargement du fichier : ', error);
      }
    };

    // Charger le contenu du fichier lorsque le composant est monté
    loadFileContent();
  }, [filePath]);

  return (
    <div className='content_text'>
      {fileContent.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default TextComponent;

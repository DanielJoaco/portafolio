import React from 'react';

const SocialMedia = ({ socialMedia }) => {
  // Verificar si socialMedia es un array antes de usar `map`
  if (!socialMedia || !Array.isArray(socialMedia)) {
    return <p>No hay redes sociales para mostrar.</p>; // Mensaje alternativo si no hay datos
  }

  return (
    <ul id='socialMedia'>
      {socialMedia.map((media) => (
        <li key={media.url}>
          <a href={media.url} target="_blank" rel="noopener noreferrer">
            <img src={media.imgDarkMode} alt={media.text} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;

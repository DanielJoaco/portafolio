import React from 'react';
import SocialMedia from './SocialMedia'

const StartSection = ({ socialMedia }) => {
  return (
    <section id="start">
      <div>
        <img src="https://raw.githubusercontent.com/DanielJoaco/portafolio/main/public/assets/avatar.jpg" alt="Foto de perfil" />
{/*         <a
          className="hoverAnimated"
          href="https://www.linkedin.com/in/daniel-joaquin-orjuela-holguin-a55054303/">
          Disponible para trabajar
        </a> */}
      </div>
      <div>
        <h1>
          Hola, soy <strong>Daniel Joaco</strong>
        </h1>
        <h3>
          <p>+8 años de experiencia <strong>administrando y gerenciando</strong> equipos gastronómicos</p>
          <p>Actualmente soy <strong>developer y data science</strong> trainee</p>
        </h3>
        <SocialMedia socialMedia={socialMedia} />
      </div>
    </section>
  );
};

export default StartSection;

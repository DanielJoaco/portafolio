import React from 'react';
import SocialMedia from './SocialMedia'
import { HoverBorderGradient } from './ui/hover-border-gradient.tsx';

const StartSection = ({ socialMedia }) => {
  return (
    <section id="start">
      <div>
        <img src="https://raw.githubusercontent.com/DanielJoaco/portafolio/main/public/assets/avatar.jpg" alt="Foto de perfil" />
        <a href='mailto:danieljorjuela@gmail.com'>
            <HoverBorderGradient
              containerClassName="my-custom-class" // Puedes ajustar las clases si es necesario
              className="additional-class"
              duration={1} // Tiempo para la rotación de la animación
            >Disponible para trabajar
            </HoverBorderGradient>
            </a>
      </div>
      <div>
        <h1 style={{margin:'0'}}>
          Hola, soy <strong>Daniel Joaco</strong>
        </h1>
        <h3 >
          <p style={{margin:'0'}}>+8 años de experiencia <strong>administrando y gerenciando</strong> equipos gastronómicos</p>
          <p style={{margin:'0'}}>Actualmente soy <strong>developer y data science</strong> trainee</p>
        </h3>
        <SocialMedia socialMedia={socialMedia} />
      </div>
    </section>
  );
};

export default StartSection;

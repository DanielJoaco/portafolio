import React from 'react';

const SideProjects = () => {
  return (
    <section id="sideProyects" className="sections">
      <h1>Proyectos</h1>
      <article className="proyect">
        <a href="https://danieljoaco.github.io/andimons/">
          <img src="https://raw.githubusercontent.com/DanielJoaco/portafolio/main/public/assets/sideProyects/andimons.jpg" alt="Andimons" />
        </a>
        <div>
          <h2>Andimons</h2>
          <p>
            Videojuego desarrollado como app web desde cero, inspirado en animales de los andes.
            Con una lógica moderada para calcular los daños de cada personaje basado en sus fortalezas,
            debilidades y tipos de ataques.
          </p>
          <footer className="logosProyect">
            <ul>
              <li>
                <img className="logo" src="https://raw.githubusercontent.com/DanielJoaco/portafolio/833cfe02aa275998603d9f0efe466d1b26cd48fd/public/assets/logos/css.svg" alt="Css" />
              </li>
              <li>
                <img className="logo" src="https://raw.githubusercontent.com/DanielJoaco/portafolio/833cfe02aa275998603d9f0efe466d1b26cd48fd/public/assets/logos/html5.svg" alt="Html5" />
              </li>
              <li>
                <img className="logo" src="https://raw.githubusercontent.com/DanielJoaco/portafolio/833cfe02aa275998603d9f0efe466d1b26cd48fd/public/assets/logos/javascript.svg" alt="Javascript" />
              </li>
            </ul>
            <a className="repLink" href="https://github.com/DanielJoaco/andimons">
              <img className="logo" src="https://raw.githubusercontent.com/DanielJoaco/portafolio/833cfe02aa275998603d9f0efe466d1b26cd48fd/public/assets/logos/github_dark.svg" alt="Github" /> Code
            </a>
          </footer>
        </div>
      </article>
    </section>
  );
};

export default SideProjects;

import React from 'react';

const SideProjects = ({ projects }) => {
  if (!projects) {
    return <p>No hay proyectos disponibles.</p>;
  }

  // Asegúrate de que 'projects' sea un array
  const projectArray = Array.isArray(projects) ? projects : Object.values(projects);

  return (
    <section id="sideProjects" className="sections">
      <h1>Proyectos</h1>
      {/* Itera sobre cada proyecto */}
      {projectArray.map((project, index) => (
        <article key={index} className="project">
          <a href={project.preview}>
            <img src={project.img} alt={project.name} />
          </a>
          <div>
            <h2>{project.name}</h2> {/* Nombre del proyecto */}
            <p>{project.description}</p> {/* Descripción del proyecto */}
            <footer className="logosProject">
              <ul>
                {/* Asegúrate de que 'technologies' es un array antes de usar 'map()' */}
                {Array.isArray(project.technologies) ? (
                  project.technologies.map((tech, idx) => (
                    <li key={idx}>
                      <img className="logo" src={tech.img} alt={tech.alt} />
                    </li>
                  ))
                ) : (
                  <li>No hay tecnologías disponibles</li> // Mensaje alternativo si no hay tecnologías
                )}
              </ul>
              {Array.isArray(project.repository) ? ( // Verifica 'repository' antes de usar 'map()'
                project.repository.map((repo, idx) => (
                  <a key={idx} className="repLink" href={repo.url}>
                    <img className="logo" src={repo.logo} alt={repo.alt} /> Proyect
                  </a>
                ))
              ) : (
                <p>No hay repositorios disponibles</p> // Mensaje alternativo si no hay repositorios
              )}
            </footer>
          </div>
        </article>
      ))}
    </section>
  );
};

export default SideProjects;

import React, { useState } from 'react';
import PaginationControls from './PaginationControls';

const WorkExperience = ({ experience }) => {
  const [currentPage, setCurrentPage] = useState(1); // Hook useState debe estar al inicio
  const itemsPerPage = 3; // Tamaño de la página para la paginación

  // Si no hay experiencia, retornar un mensaje
  if (!experience) {
    return <p>No se cargaron correctamente los datos.</p>;
  }

  const experienceArray = Array.isArray(experience) ? experience : Object.values(experience);

  // Índices para obtener el subconjunto de elementos para la página actual
  const start = (currentPage - 1) * itemsPerPage; // Índice de inicio
  const end = start + itemsPerPage; // Índice de fin
  const paginatedExperience = experienceArray.slice(start, end); // Obtener el subconjunto para la página actual

  return (
    <section id="workExperience" className="sections">
      <h1>Experiencia laboral</h1>

      {paginatedExperience.map((exp, idx) => (
        <article key={idx} className="experienceCards">
          <div style={{display: 'grid',
    gridTemplateColumns: '70% 30%',
    alignItems: 'center',
    justifyItems: 'start',
    paddingRight:'1rem'}}>
            <div>
            <h1 style={{ color: 'rgb(29, 213, 155, 0.9)' }}>{exp.position}</h1>
            <h2>{exp.enterprise.name}</h2>
            <time
              dateTime={exp.enterprise.dateStart}
              style={{ padding: '0', marginBottom: '1rem', fontStyle: 'italic', fontSize: '1.4rem' }}
            >
              <img
                src="https://raw.githubusercontent.com/DanielJoaco/portafolio/833cfe02aa275998603d9f0efe466d1b26cd48fd/public/assets/calendar_dark.svg"
                alt="Calendar"
                style={{ margin: '0 1rem 0 0' }}
              />
              {exp.formattedDates[0]?.star} - {exp.formattedDates[1]?.finish}
            </time>
            </div>
            <img
              style={{
                width: '15rem',
                height: '15rem',
                borderRadius: '999rem',
                opacity: '0.7',
              }}
              src={exp.enterprise.logo}
              alt={exp.enterprise.name}
            />
          </div>


          <p style={{ fontSize: '1.8rem' }}>{exp.description}</p>

          <div className="technologies">
            {Array.isArray(exp.technologies) ? (
              exp.technologies.map((tech, techIdx) => (
                <img key={techIdx} src={tech.img} alt={tech.alt} className="logo" />
              ))
            ) : (
              <p></p>
            )}
          </div>

          <div className="knowMore" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              href={exp.enterprise.media}
            >
              <span>Ver más</span>
              <img
                className="logo"
                src="https://raw.githubusercontent.com/DanielJoaco/portafolio/833cfe02aa275998603d9f0efe466d1b26cd48fd/public/assets/externalLink_dark.svg"
                alt="Flecha"
              />
            </a>
          </div>
        </article>
      ))}
          <PaginationControls
            totalItems={experienceArray.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            scrollElement='workExperience'
          />
    </section>
  );
};

export default WorkExperience;

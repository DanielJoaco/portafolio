import React from "react"; // Asegúrate de importar React

const WorkExperience = ({ experience }) => { 
  if (!experience) {
    return <p>No se cargaron correctamente los datos.</p>; 
  }

  const experienceArray = Array.isArray(experience) ? experience : Object.values(experience); 
  console.log(experienceArray)
  return (
    <section id="workExperience" className="sections"> 
      <h1>Experiencia laboral</h1>
      {experienceArray.map((exp, idx) => ( 
        <article key={idx} className="experienceCards"> 
          <div> 
            <img style={{width:'10rem', height:'10rem'}} src={exp.enterprise.logo} alt={exp.enterprise.name} /> 
          </div>
          <h1 style={{color:'rgb(29, 213, 155, 0.9)'}}>{exp.position}</h1> 
          <h2>{exp.enterprise.name}</h2> 
          <time dateTime={exp.enterprise.dateStart} style={{padding:'0', marginBottom:'1rem', fontStyle: 'italic', fontSize:'1.4rem' }}> 
            <img src="https://raw.githubusercontent.com/DanielJoaco/portafolio/833cfe02aa275998603d9f0efe466d1b26cd48fd/public/assets/calendar_dark.svg" alt="Calendar" style={{margin: '0 1rem 0 0'}}/> 
            {exp.formattedDates[0]?.star} - {exp.formattedDates[1]?.finish}
          </time>
          <p style={{fontSize: '1.8rem'}}>{exp.description}</p> 

          <div className="technologies"> {/* Div para mostrar tecnologías */}
            {Array.isArray(exp.technologies) ? ( // Verificar si es array
              exp.technologies.map((tech, techIdx) => ( // Mostrar íconos de tecnologías
                <img key={techIdx} src={tech.img} alt={tech.alt} className="logo" /> // Usar clave única
              ))
            ) : (
              <p></p> // Manejo de errores
            )}
          </div>

          <div className="knowMore" style={{display:'flex', justifyContent:'flex-end'}}> 
            <a style={{display:'flex', alignItems:'center'}} href={exp.enterprise.media}>
              <span>Ver más</span>
              <img className="logo" src="https://raw.githubusercontent.com/DanielJoaco/portafolio/833cfe02aa275998603d9f0efe466d1b26cd48fd/public/assets/externalLink_dark.svg" alt="Flecha" />
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};

export default WorkExperience;

import React from 'react';

const Skills = ({ skills, title }) => {
  console.log(skills)
  return (
    <article id={skills.type} className="skills" style={{ position: 'relative' }}> {/* Asegura que tiene position: relative */}
      <h2>{title}</h2>
      <ul style={{padding: '0'}} >
        {skills.map((skill) => (
          <li key={skill.text} style={{ position: 'relative' }}> {/* Agrega position: relative a los elementos */}
            <img src={skill.imgDarkMode} alt={skill.text} />
            <h3 style={{fontSize: '1.2rem'}}>{skill.text}</h3>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Skills;

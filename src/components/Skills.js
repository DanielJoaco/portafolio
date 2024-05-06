import React from 'react';

const Skills = ({ skills }) => {
  return (
    <article id={skills.type} className='skills'>
    <ul>
      {skills.map((skill) => (
        <li key={skill.text}>
          <img src={skill.imgDarkMode} alt={skill.text} />
          <h3>{skill.text}</h3>
        </li>
      ))}
    </ul>
    </article>

  );
};

export default Skills;

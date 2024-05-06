import React, { useState, useRef } from 'react';
import Skills from './Skills';

const ContentSkills = ({ hardSkillsDev, hardSkillsChef, softSkills }) => {
  const [selectedSkill, setSelectedSkill] = useState('developer'); // Estado para la selección de habilidades
  const contentSkillsRef = useRef(null); // Referencia para desplazamiento suave

  const handleSkillChange = (skillType) => {
    setSelectedSkill(skillType); // Cambiar la habilidad seleccionada

    // Desplazar al inicio de la sección de habilidades
    if (contentSkillsRef.current) {
      contentSkillsRef.current.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    }
  };

  return (
    <section ref={contentSkillsRef} id="contentSkills" className="sections">
      <h1>Habilidades</h1>
      <div>
        <button onClick={() => handleSkillChange('developer')}>Dev</button> {/* Cambiar estado y desplazar */}
        <button onClick={() => handleSkillChange('chef')}>Chef</button>
        <button onClick={() => handleSkillChange('soft')}>Blandas</button>
      </div>

      {/* Renderizar las habilidades según la selección */}
      {selectedSkill === 'developer' && <Skills skills={hardSkillsDev} />}
      {selectedSkill === 'chef' && <Skills skills={hardSkillsChef} />}
      {selectedSkill === 'soft' && <Skills skills={softSkills} />}
    </section>
  );
};

export default ContentSkills;

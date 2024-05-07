import React, { useState, useRef } from 'react';
import Skills from './Skills';
import { Tabs } from './ui/tabs.tsx'; // Importa el componente Tabs

const ContentSkills = ({ hardSkillsDev, hardSkillsChef, softSkills }) => {
  const contentSkillsRef = useRef(null); // Para desplazamiento suave
  const [selectedSkill, setSelectedSkill] = useState('developer'); // Estado para la selección de habilidades

  // Configura las pestañas para las habilidades
  const tabs = [
    { title: 'Dev', value: 'developer', content: <Skills skills={hardSkillsDev} title="Dev" /> },
    { title: 'Chef', value: 'chef', content: <Skills skills={hardSkillsChef} title="Chef" /> },
    { title: 'Blandas', value: 'soft', content: <Skills skills={softSkills} title="Blandas" /> },
  ];

  // Manejador para cambio de pestaña
  const handleTabChange = (newTab) => {
    setSelectedSkill(newTab); // Cambia la pestaña seleccionada
    if (contentSkillsRef.current) {
      contentSkillsRef.current.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    }
  };

  return (
    <section ref={contentSkillsRef} id="contentSkills" className="sections">
      <h1>Habilidades</h1>
      <Tabs
        tabs={tabs} // Pasa las pestañas al componente Tabs
        activeTabClassName="bg-gray-200 dark:bg-zinc-800" // Clase para la pestaña activa
        contentClassName="mt-8" // Clase para el contenido
        onTabChange={handleTabChange} // Pasa el manejador para cambio de pestaña
      />
    </section>
  );
};

export default ContentSkills;

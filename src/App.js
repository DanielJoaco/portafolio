import React from 'react'; // useState ya no se usa aquí
import data from './data.json'; // Importar archivo JSON con json-loader
import Navbar from './components/Navbar';
import StartSection from './components/StartSection';
import WorkExperience from './components/WorkExperience';
import SideProjects from './components/SideProjects';
import ContentSkills from './components/ContentSkills';
import Certificates from './components/Certificates';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './App.css';

const _formatDate = (input) => {
  // Expresión regular para verificar un formato ISO 8601 simple (YYYY-MM-DD)
  const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;

  if (isoDatePattern.test(input)) {
    const [year, month, day] = input.split('-').map(Number);
    const fecha = new Date(year, month - 1, day);

    const opciones = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };

    const formateador = new Intl.DateTimeFormat('es-ES', opciones);
    return formateador.format(fecha);
  } else {
    return input;
  }
};


const App = () => {
  const formattedCertificates = data.certificates.map((certificate) => ({
    ...certificate,
    formattedDate: _formatDate(certificate.date),
  }));

  const formattedExperience = data.experience.map((exp) => {
    const formattedStart = _formatDate(exp.enterprise.dateStart);
    const formattedFinish = _formatDate(exp.enterprise.dateFinish);
  
    return {
      ...exp, 
      formattedDates: [
      { star: formattedStart },
      { finish: formattedFinish },
      ]}
  })

  return (
    <div id='htmlRender'>
      {data ? ( 
        <>
          <Navbar />
          <StartSection socialMedia={data.socialMedia} />
          <WorkExperience experience={formattedExperience} />
          <SideProjects projects={data.sideProjects} />
          <ContentSkills
            hardSkillsDev={data.hardSkillsDev}
            hardSkillsChef={data.hardSkillsChef}
            softSkills={data.softSkills}
          />
          <Certificates certificates={formattedCertificates} />
          <AboutMe aboutMe={data.aboutMe} />
          <Footer />
        </>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default App;

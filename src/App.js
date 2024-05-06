import React from 'react'; // useState ya no se usa aquí
import data from './data.json'; // Importar archivo JSON con json-loader
import Navbar from './components/Navbar';
import StartSection from './components/StartSection';
import SideProjects from './components/SideProjects';
import ContentSkills from './components/ContentSkills';
import Certificates from './components/Certificates';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './App.css';

const _formatDate = (fechaISO) => {
  const [year, month, day] = fechaISO.split('-').map(Number);
  const fecha = new Date(year, month - 1, day);

  const opciones = {
    day: 'numeric',
    month: 'long',
    year: 'numeric', 
  };

  const formateador = new Intl.DateTimeFormat('es-ES', opciones);
  return formateador.format(fecha);
};

const App = () => {
  const formattedCertificates = data.certificates.map((certificate) => ({
    ...certificate,
    formattedDate: _formatDate(certificate.date),
  }));

  // Reutiliza el bloque "data?" al ser prácticamente idéntico 
  return (
    <div id='htmlRender'>
      {data ? ( 
        <>
          <Navbar />
          <StartSection socialMedia={data.socialMedia} />
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

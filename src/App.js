import React, { useState, useEffect } from 'react';
import DataLoader from './components/DataLoader';
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
  const [data, setData] = useState(null);

  const handleDataLoaded = (loadedData) => {
    const { certificates, ...restOfData } = loadedData;

    const formattedCertificates = certificates.map((certificate) => ({
      ...certificate,
      formattedDate: _formatDate(certificate.date),
    }));

    setData({
      ...restOfData,
      certificates: formattedCertificates,
    });
  };

  return (
    <div id='htmlRender'>
      <DataLoader jsonPath="/json/data.json" onDataLoaded={handleDataLoaded} />
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
          <Certificates certificates={data.certificates} />
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

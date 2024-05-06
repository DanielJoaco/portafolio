import React, { useState } from 'react';
import CertificateItem from './CertificateItem'; // Componente para renderizar un certificado
import PaginationControls from './PaginationControls'; // Controles de paginación

const Certificates = ({ certificates }) => {
  const [currentPage, setCurrentPage] = useState(1); // Control de paginación
  const pageSize = 6; // Tamaño de página para la paginación

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage); // Cambiar la página actual
  };

  const start = (currentPage - 1) * pageSize; // Índice de inicio de la página actual
  const end = start + pageSize; // Índice final de la página actual
  const paginatedCertificates = certificates.slice(start, end); // Certificados para la página actual

  return (
    <section id="certificates" className="sections">
      <h1>Certificaciones</h1>
      <div id='divcertificates'>
      {paginatedCertificates.map((certificate) => (
        <CertificateItem key={certificate.name} certificate={certificate} />
      ))}
      </div>
      <PaginationControls
        totalCertificates={certificates.length}
        currentPage={currentPage}
        onPageChange={handleChangePage}
      />
    </section>
  );
};

export default Certificates;

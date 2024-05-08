import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Importar framer-motion para animaciones
import CertificateItem from './CertificateItem'; // Componente para renderizar certificados
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
          <motion.div
            key={certificate.name}
            whileHover={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '3rem',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', // Añade sombra al hacer hover
              transition: { duration: 0.3 }, // Transición suave
            }}
          >
            <CertificateItem certificate={certificate} /> {/* Componente para certificado */}
          </motion.div>
        ))}
      </div>
      <PaginationControls
        totalItems={certificates.length}
        itemsPerPage={pageSize}
        currentPage={currentPage}
        onPageChange={handleChangePage}
        scrollElement='certificates'
      />
    </section>
  );
};

export default Certificates;

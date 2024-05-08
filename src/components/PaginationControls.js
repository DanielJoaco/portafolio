import React, { useRef } from 'react';

const PaginationControls = ({ totalItems, itemsPerPage, currentPage, onPageChange, scrollElement }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Total de páginas

  // Crear referencia para el desplazamiento suave
  const certificatesRef = useRef(null);

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber); // Cambiar la página actual

    // Desplazamiento suave hacia el elemento con ID 'certificates'
    const certificatesElement = certificatesRef.current || document.getElementById(scrollElement);
    if (certificatesElement) {
      certificatesElement.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    }
  };

  return (
    <div id="navegationCertificates">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)} // Manejar cambio de página y scroll
          style={{
            fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationControls;

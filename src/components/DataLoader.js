import React, { useEffect } from 'react';

const DataLoader = ({ jsonPath, onDataLoaded }) => {
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(jsonPath);
        if (!response.ok) {
          throw new Error('Error al cargar datos JSON');
        }
        const jsonData = await response.json();
        onDataLoaded(jsonData); // Llama al callback con los datos cargados
      } catch (error) {
        console.error('Error al cargar datos JSON:', error);
      }
    };

    loadData(); // Cargar datos al montar el componente
  }, [jsonPath, onDataLoaded]); // Ejecutar solo al montar el componente

  return null; // No se renderiza nada, solo carga datos
};

export default DataLoader;

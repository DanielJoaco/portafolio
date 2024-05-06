import{ useEffect } from 'react';

const DataLoader = ({ jsonPath, onDataLoaded }) => {
  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('jsonPath:', jsonPath); // Add this line

        const response = await fetch(jsonPath);
        console.log('Response:', response);
        const responseText = await response.text();
        console.log('Response text():', responseText);  

        if (!response.ok) {
          throw new Error('Error al cargar datos JSON');
        }

        // Verificar si la respuesta está efectivamente en formato JSON antes de intentar procesarla
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('La respuesta no es un JSON válido'); 
        } 

        const jsonData = await response.json();
        console.log('jsonData:', jsonData); // Add this line

        onDataLoaded(jsonData); // Call the callback with the loaded data
      } catch (error) {
        console.error('Error al cargar datos JSON:', error);
      }
    };

    loadData();
  }, [jsonPath, onDataLoaded]);

  return null;
};


export default DataLoader;

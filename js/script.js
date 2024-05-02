// Escucha el evento DOMContentLoaded para cargar scripts y datos
document.addEventListener('DOMContentLoaded', async () => {
    await loadJsonData(); // Espera a que se carguen los datos
    loadScripts(); // Carga las funciones que usan esos datos
  });
  
  // Clase para representar datos
  class Data {
    constructor(img, text, type, category, url, imgDarkMode = img) {
      this.img = img;
      this.imgDarkMode = imgDarkMode;
      this.text = text;
      this.type = type;
      this.category = category;
      this.url = url;
    }
  }
  
  // Ruta para el archivo JSON
  const jsonPath = '../json/data.json';
  
  // Variable global para almacenar los datos cargados
  let socialMedia = [];
  let hardSkills = [];
  let softSkills = [];
  
  // Función para cargar el archivo JSON y manejar errores
  async function loadJsonData() {
    try {
      const response = await fetch(jsonPath);
      if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON');
      }
      const data = await response.json(); // Convertir a JSON
  
      // Asignar valores a las variables globales
      socialMedia = data.socialMedia.map(
        (item) => new Data(item.img, item.text, item.type, item.category, item.url, item.imgDarkMode)
      );
      hardSkills = data.hardSkills.map(
        (item) => new Data(item.img, item.text, item.type, item.category, item.url, item.imgDarkMode)
      );
      softSkills = data.softSkills.map(
        (item) => new Data(item.img, item.text, item.type, item.category, item.url, item.imgDarkMode)
      );
  
    } catch (error) {
      console.error('Error al cargar datos JSON:', error);
    }
  }
  
  // Función para cargar scripts adicionales
  function loadScripts() {
    addSocialMedia(); // Añadir redes sociales al DOM
    addHardSkills();
    addSoftSkills();  // Añadir habilidades al DOM
  }
  
  // Agregar redes sociales al DOM
  function addSocialMedia() {
    const socialMediaList = document.getElementById('socialMedia');
  
    socialMedia.forEach((media) => {
      const listItem = document.createElement('li'); // Crear elemento
      const link = document.createElement('a');
      link.href = media.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
  
      const img = document.createElement('img');
      img.src = media.imgDarkMode;
      img.alt = media.text;
  
      link.appendChild(img); // Añadir imagen al enlace
      listItem.appendChild(link); // Añadir enlace al elemento de lista
      socialMediaList.appendChild(listItem); // Añadir al DOM
    });
  }

    // Agregar habilidades al DOM
    function addHardSkills() {
        const divHardSkills = document.getElementById('divHardSkills');
      
        hardSkills.forEach((skills) => {
          const listItem = document.createElement('li');
          const img = document.createElement('img');
          img.src = skills.imgDarkMode;
          img.alt = skills.text;
      
          const heading = document.createElement('h3');
          heading.textContent = skills.text;
      
          listItem.appendChild(img); // Añadir imagen al elemento de lista
          listItem.appendChild(heading); // Añadir encabezado al elemento de lista
          divHardSkills.appendChild(listItem); // Añadir al DOM
        });
      }
  
  // Agregar habilidades al DOM
  function addSoftSkills() {
    const softSkillsDiv = document.getElementById('divSoftSkills');
  
    softSkills.forEach((skills) => {
      const listItem = document.createElement('li');
      const img = document.createElement('img');
      img.src = skills.imgDarkMode;
      img.alt = skills.text;
  
      const heading = document.createElement('h3');
      heading.textContent = skills.text;
  
      listItem.appendChild(img); // Añadir imagen al elemento de lista
      listItem.appendChild(heading); // Añadir encabezado al elemento de lista
      softSkillsDiv.appendChild(listItem); // Añadir al DOM
    });
  }
  
// Escucha el evento DOMContentLoaded para cargar scripts y datos
document.addEventListener('DOMContentLoaded', async () => {
  const dataLoader = new DataLoader('./json/data.json'); // Cargar datos JSON
  const data = await dataLoader.loadData(); // Obtener datos
  if (data) {
    const renderer = new Renderer(data); // Crear instancia del renderizador
    renderer.render(); // Renderizar elementos al DOM
  }
});
// Clase para representar datos genéricos
class Data {
  constructor({ img, text, type, category, url, imgDarkMode = img }) {
    this.img = img;
    this.imgDarkMode = imgDarkMode;
    this.text = text;
    this.type = type;
    this.category = category;
    this.url = url;
  }
}

// Clase para representar certificados
class Certificate {
  constructor({ name, date, certifyingCompany, companyLogo, img, url }) {
    this.name = name;
    this.date = date;
    this.certifyingCompany = certifyingCompany;
    this.companyLogo = companyLogo;
    this.img = img;
    this.url = url;

    // Formatear la fecha
    this.formattedDate = this._formatDate(date);
  }

  _formatDate(fechaISO) {
    // Dividir la fecha ISO en año, mes, día
    const [year, month, day] = fechaISO.split('-').map(Number);
  
    // Crear la fecha local sin ajustes de zona horaria
    const fecha = new Date(year, month - 1, day); // El mes es 0-based
  
    // Configurar opciones para Intl.DateTimeFormat
    const opciones = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
  
    const formateador = new Intl.DateTimeFormat('es-ES', opciones);
    
    console.log(formateador.format(fecha), fechaISO); // Verificar el resultado
    return formateador.format(fecha); // Formatear la fecha correctamente
  }
}

// Clase para cargar datos desde JSON
class DataLoader {
  constructor(jsonPath) {
    this.jsonPath = jsonPath;
  }

  async loadData() {
    try {
      const response = await fetch(this.jsonPath);
      if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON');
      }

      const rawData = await response.json();

      return {
        socialMedia: this._mapData(rawData.socialMedia),
        hardSkillsDev: this._mapData(rawData.hardSkillsDev),
        hardSkillsChef: this._mapData(rawData.hardSkillsChef),
        softSkills: this._mapData(rawData.softSkills),
        certificates: this._mapCertificates(rawData.certificates)
      };
    } catch (error) {
      console.error('Error al cargar datos JSON:', error);
      return null;
    }
  }

  _mapData(dataArray) {
    return dataArray.map(item => new Data(item));
  }

  _mapCertificates(certificatesArray) {
    return certificatesArray.map(item => new Certificate(item));
  }
}

// Clase para renderizar elementos al DOM
class Renderer {
  constructor(data) {
    this.data = data;
    this.currentPage = 1; // Página actual
    this.pageSize = 6; // Número de artículos por página
  }

  render() {
    if (this.data) {
      // Mantener las demás secciones como están
      this._addToDom('socialMedia', this.data.socialMedia, this._createSocialMediaElement);
      this._addToDom('divHardSkillsDev', this.data.hardSkillsDev, this._createSkillElement);
      this._addToDom('DivHardSkillsChef', this.data.hardSkillsChef, this._createSkillElement);
      this._addToDom('divSoftSkills', this.data.softSkills, this._createSkillElement);

      // Agregar funcionalidad de paginación para certificados
      this._renderPaginatedCertificates('divcertificates', this.data.certificates);
    }
  }

  _addToDom(parentId, dataArray, createElement) {
    const parent = document.getElementById(parentId);
    if (parent) {
      parent.innerHTML = ""; // Limpiar el contenido existente
      dataArray.forEach(item => {
        parent.appendChild(createElement(item));
      });
    }
  }

  _renderPaginatedCertificates(parentId, certificates) {
    const parent = document.getElementById(parentId);
    parent.innerHTML = ""; // Limpiar el contenido existente

    // Obtener el conjunto de certificados para la página actual
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    const paginatedCertificates = certificates.slice(start, end);

    paginatedCertificates.forEach(certificate => {
      const element = this._createCertificateElement(certificate);
      parent.appendChild(element);
    });

    // Agregar controles de paginación
    this._addPaginationControls(certificates.length);
  }

  _addPaginationControls(totalCertificates) {
    const parent = document.getElementById('navegationCertificates');
    parent.innerHTML = ''; // Limpiar cualquier contenido existente
    const totalPages = Math.ceil(totalCertificates / this.pageSize);
  
    // Crear botones para cada número de página
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i; // Número de la página
      pageButton.className = 'page-button';
      pageButton.onclick = () => this.changePage(i); // Cambiar a la página correspondiente
      if (i === this.currentPage) {
        pageButton.style.fontWeight = "bold"; // Resaltar la página actual
        pageButton.style.fontSize = '3rem'; // Resaltar la página actual
      }
      parent.appendChild(pageButton); // Agregar el botón al contenedor
    }
  }
  

  changePage(newPage) {
    this.currentPage = newPage; // Cambiar la página actual
    this.render(); // Renderizar el contenido para la nueva página
    
    // Desplazar la vista al inicio del contenedor 'certificates'
    const certificatesSection = document.getElementById('certificates');
    certificatesSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
  }
  

  _createSocialMediaElement(media) {
    // Mantener como está
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = media.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    const img = document.createElement('img');
    img.src = media.imgDarkMode;
    img.alt = media.text;

    link.appendChild(img);
    listItem.appendChild(link);
    return listItem;
  }

  _createSkillElement(skill) {
    // Mantener como está
    const listItem = document.createElement('li');
    const img = document.createElement('img');
    img.src = skill.imgDarkMode;
    img.alt = skill.text;

    const heading = document.createElement('h3');
    heading.textContent = skill.text;

    listItem.appendChild(img);
    listItem.appendChild(heading);
    return listItem;
  }

  _createCertificateElement(certificate) {
    // Mantener como está
    const article = document.createElement('article');
    article.className = 'certificationArticles';

    const img = document.createElement('img');
    img.src = certificate.img;
    img.alt = `Certificado de ${certificate.name}`;

    const h2 = document.createElement('h2');
    h2.textContent = certificate.name;

    const time = document.createElement('time');
    time.dateTime = certificate.date;

    const calendarIcon = document.createElement('img');
    calendarIcon.src = './assets/calendar_dark.svg';
    calendarIcon.alt = 'Calendario';

    const textNode = document.createTextNode(` ${certificate.formattedDate}`);

    time.appendChild(calendarIcon);
    time.appendChild(textNode);

    const companyLogo = document.createElement('img');
    companyLogo.src = certificate.companyLogo;
    companyLogo.alt = certificate.certifyingCompany;

    const companyName = document.createElement('h3');
    companyName.textContent = certificate.certifyingCompany;

    const link = document.createElement('a');
    link.href = certificate.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    const externalLinkIcon = document.createElement('img');
    externalLinkIcon.src = './assets/externalLink_dark.svg';
    externalLinkIcon.alt = 'Enlace Externo';

    link.appendChild(externalLinkIcon);

    const companyDiv = document.createElement('div');
    companyDiv.appendChild(companyLogo);
    companyDiv.appendChild(companyName);
    companyDiv.appendChild(link);

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(time);
    article.appendChild(companyDiv);

    return article;
  }
}

function changedisplay(event) {

  const eventId = event.dataset.buttonId;
  const contentSkills = document.getElementById('contentSkills');

  const skillsMap = {
    developer: 'hardSkillsDev',
    chef: 'hardSkillsChef',
    soft: 'softSkills'
  };

  for (const key in skillsMap) {
    document.getElementById(skillsMap[key]).style.display = 'none';
  }

  document.getElementById(skillsMap[eventId]).style.display = 'flex';
  contentSkills.scrollIntoView({ behavior: 'smooth' });
}



window.changedisplay = changedisplay
 
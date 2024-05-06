import React from 'react';

const CertificateItem = ({ certificate }) => (
  <article className="certificationArticles">
    <img src={certificate.img} alt={`Certificado de ${certificate.name}`} />
    <h2>{certificate.name}</h2>
    <time dateTime={certificate.date}>
      <img src="./assets/calendar_dark.svg" alt="Calendario" />
      {certificate.formattedDate}
    </time>
    <div>
      <img src={certificate.companyLogo} alt={certificate.certifyingCompany} />
      <h3>{certificate.certifyingCompany}</h3>
      <a href={certificate.url} target="_blank" rel="noopener noreferrer">
        <img src="./assets/externalLink_dark.svg" alt="Enlace externo" />
      </a>
    </div>
  </article>
);

export default CertificateItem;

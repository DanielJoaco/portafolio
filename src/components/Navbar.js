import React, { useState } from 'react';

const Navbar = () => {
  const [showMore, setShowMore] = useState(false);

  // Estos son los elementos que siempre se muestran
  const visibleLinks = [
    { href: "#start", text: "Inicio" },
    { href: "#workExperience", text: "Experiencia" },
    { href: "#sideProjects", text: "Proyectos" },
  ];

  // Estos son los elementos ocultos que se mostrarán al hacer clic o hover
  const hiddenLinks = [
    { href: "#contentSkills", text: "Habilidades" },
    { href: "#certificates", text: "Certificaciones" },
    { href: "#aboutMe", text: "Sobre mí" },
  ];

  return (
    <header>
      <nav style={{display:'flex', alignItems:'center', maxHeight:'3rem'}}>
        {visibleLinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.text}
          </a>
        ))}

        {/* Desplegable para "Más opciones" */}
        <div
          className="dropdown"
          onMouseEnter={() => setShowMore(true)}
          onMouseLeave={() => setShowMore(false)}
          style={{position:'relative', zIndex:'1', margin:'0'}}
        >
          <button 
            style={{
              backgroundColor: 'transparent',
              border:'none',
              boxShadow:'none',
              height:'1rem',
              width:'auto',
              margin: '1rem',
              padding: '0',
              boxSizing: 'border-box' 

            }}
            >=</button>
          {showMore && (
            <div className="dropdown-content" 
              style={{
                position:'absolute', 
                Index:'1', 
                display:'flex', 
                flexDirection:'column',
                backgroundColor: 'rgba(0, 0, 0, 0.55)',
                borderRadius:'2rem',   
                padding:'1rem'             
                }}>
              {hiddenLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

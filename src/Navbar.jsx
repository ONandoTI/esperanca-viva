import React, { useState } from 'react';
import './Navbar.css'; // Dependência de CSS
import logo from './imagens/logo.jpg'; 

// 1. Recebe 'setCurrentPage' como uma propriedade (prop)
function Navbar({ setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Função para lidar com cliques nos links
  const handleNavClick = (e, page) => {
    e.preventDefault(); // Impede o 'href' de recarregar a página
    setCurrentPage(page); // Atualiza o estado no componente 'App'
    setIsMenuOpen(false); // Fecha o menu mobile após o clique
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          
          <div className="navbar-left">
            <div className="navbar-logo">
              <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <div className="navbar-title-container">
              <span className="navbar-title">ONG Esperança Viva</span>
            </div>
          </div>

          {/* 3. Links do Desktop atualizados com onClick */}
          <div className="navbar-right-desktop">
            <div className="navbar-links">
              <a tabIndex="0" href="#" className="nav-link" onClick={(e) => handleNavClick(e, 'inicio')}>
                Início
              </a>
              <a tabIndex="0" href="#" className="nav-link" onClick={(e) => handleNavClick(e, 'projetos')}>
                Projetos
              </a>
              <a tabIndex="0" href="#" className="nav-link" onClick={(e) => handleNavClick(e, 'cadastro')}>
                Cadastro
              </a>
              <a tabIndex="0" href="#" className="nav-link" onClick={(e) => handleNavClick(e, 'doacao')}>
                Doação
              </a>
            </div>
          </div>

          {/* Botão Hamburger (Mobile) */}
          <div className="navbar-hamburger-button">
            <button
              aria-label="Abrir menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="hamburger-button-inner"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              {!isMenuOpen ? (
                <svg className="hamburger-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="hamburger-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Links do Menu Mobile atualizados com onClick */}
      <div className={`navbar-mobile-menu ${isMenuOpen ? 'open' : ''}`} id="mobile-menu">
        <div className="mobile-menu-links">
          <a href="#" className="nav-link-mobile" onClick={(e) => handleNavClick(e, 'inicio')}>
            Início
          </a>
          <a href="#" className="nav-link-mobile" onClick={(e) => handleNavClick(e, 'projetos')}>
            Projetos
          </a>
          <a href="#" className="nav-link-mobile" onClick={(e) => handleNavClick(e, 'cadastro')}>
            Cadastro
          </a>
          <a href="#" className="nav-link-mobile" onClick={(e) => handleNavClick(e, 'doacao')}>
            Doação
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


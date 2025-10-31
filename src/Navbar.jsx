import React, { useState, useEffect } from 'react';
import './css/Navbar.css';
import logo from './imagens/logo_grayscale.png';

function Navbar({ setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // tema atual

  // 🧠 Carrega o tema salvo no localStorage ao iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // 🌓 Alterna entre claro e escuro
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleNavClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="ev-navbar">
  <div className="ev-navbar-container">
    <div className="ev-navbar-content">
      <div className="ev-navbar-left">
        <div className="ev-navbar-logo">
          <img
            src={logo}
            alt="Logo da ONG Esperança Viva"
            className="logo-image"
          />
        </div>
      </div>

      <div className="ev-navbar-title-container">
          <span className="ev-navbar-title">ONG Esperança Viva</span>
        </div>

      {/* Links Desktop + Botão Dark Mode */}
      <div className="ev-navbar-right-desktop">
        <div className="ev-navbar-links">
          <a
            href="#"
            className="ev-nav-link"
            onClick={(e) => handleNavClick(e, 'inicio')}
          >
            Início
          </a>
          <a
            href="#"
            className="ev-nav-link"
            onClick={(e) => handleNavClick(e, 'projetos')}
          >
            Projetos
          </a>
          <a
            href="#"
            className="ev-nav-link"
            onClick={(e) => handleNavClick(e, 'cadastro')}
          >
            Cadastro
          </a>
          <a
            href="#"
            className="ev-nav-link"
            onClick={(e) => handleNavClick(e, 'doacao')}
          >
            Doação
          </a>

          {/* 🌙 Botão de Modo Escuro (agora dentro da lista de links) */}
          <button
            onClick={toggleTheme}
            aria-label={`Alternar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
            className="ev-theme-toggle-btn"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>

      {/* Botão Mobile (hambúrguer) */}
      <div className="ev-navbar-hamburger-button">
        <button
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="ev-hamburger-button-inner"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          {!isMenuOpen ? (
            <svg
              className="ev-hamburger-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="ev-hamburger-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  </div>

  {/* Menu Mobile */}
  <div
    className={`ev-navbar-mobile-menu ${isMenuOpen ? 'open' : ''}`}
    id="mobile-menu"
  >
    <div className="ev-mobile-menu-links">
      <a
        href="#"
        className="ev-nav-link-mobile"
        onClick={(e) => handleNavClick(e, 'inicio')}
      >
        Início
      </a>
      <a
        href="#"
        className="ev-nav-link-mobile"
        onClick={(e) => handleNavClick(e, 'projetos')}
      >
        Projetos
      </a>
      <a
        href="#"
        className="ev-nav-link-mobile"
        onClick={(e) => handleNavClick(e, 'cadastro')}
      >
        Cadastro
      </a>
      <a
        href="#"
        className="ev-nav-link-mobile"
        onClick={(e) => handleNavClick(e, 'doacao')}
      >
        Doação
      </a>
      {/* 🌙 Botão de Modo Escuro (agora dentro da lista de links) */}
          <button
            onClick={toggleTheme}
            aria-label={`Alternar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
            className="ev-theme-toggle-btn"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
    </div>
  </div>
</nav>

  );
}

export default Navbar;

import React from 'react';
import './css/Footer.css'; // Importa o CSS do rodapé

function Footer() {
  return (
    // Usa 'className' e <address>
    <footer className="footer-container">
      <h2>Contato</h2>
      <address className="footer-address">
        <p>📍 Rua da Esperança, 123 – São Paulo/SP</p>
        <p>☎️ (11) 4002-8922</p>
        <p>📧 <a href="mailto:contato@esperancaviva.org.br">contato@esperancaviva.org.br</a></p>
      </address>
      {/* O HTML original tinha um 'id="rodapecopyright"', 
        mas vamos usar 'className' para manter o padrão do React/CSS.
      */}
      <p className="footer-copyright">&copy; 2025 ONG Esperança Viva. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;


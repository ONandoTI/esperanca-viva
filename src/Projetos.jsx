import React from 'react';
import './Projetos.css'; 
import projeto1Img from './imagens/projeto1.png';
import projeto2Img from './imagens/projeto2.png';
import projeto3Img from './imagens/projeto3.png';

// 1. Imports das imagens locais foram REMOVIDOS para corrigir o erro de compilação.
// Vamos usar URLs placeholder por agora.

function Projetos({ setCurrentPage }) {

  const handleLinkClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <div className="projetos-container">
      <section>
        <h2>Nossos Projetos</h2>

        <div className="projetos-grid">
          
          <article>
            <h3>Educar para o Futuro</h3>
            {/* 2. Alterado para usar uma imagem placeholder diretamente via URL */}
            <img src={projeto1Img} alt="Projeto1"/>
            <p>Oferece cursos gratuitos de reforço escolar, alfabetização de adultos e oficinas de tecnologia para jovens.</p>
          </article>

          <article>
            <h3>Alimente Esperança</h3>
            {/* 2. Alterado para usar uma imagem placeholder */ }
            <img src={projeto2Img} alt="Projeto2"/>
            <p>Campanha permanente de arrecadação e distribuição de cestas básicas para famílias carentes.</p>
          </article>

          <article>
            <h3>Verde que te Quero Verde</h3>
            {/* 2. Alterado para usar uma imagem placeholder */ }
            <img src={projeto3Img} alt="Projeto3"/>
            <p>Projeto de sustentabilidade urbana, com plantio de árvores e oficinas de reciclagem nas comunidades.</p>
          </article>
        
        </div> 
        {/* Fim do .projetos-grid */}
      </section>

      <section className="como-ajudar">
        <h2>Como Ajudar</h2>
        <p>Você pode se tornar um voluntário ou realizar uma doação para apoiar nossos projetos.</p>
        <ul>
          <li>
            <a href="#" onClick={(e) => handleLinkClick(e, 'cadastro')}>
              Quero ser voluntário
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleLinkClick(e, 'doacao')}>
              Quero doar
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Projetos;


import React from 'react';
import './css/Inicio.css';
import banner from './imagens/banner.jpg';

function Inicio() {
  return (
    <div className="inicio-container">
      {/* Seção Hero */}
      <section className="inicio-hero">
        <div className="hero-text">
          <h1>ONG Esperança Viva</h1>
          <p>Transformando vidas com solidariedade, educação e amor.</p>
          <a href="#sobre" className="hero-btn">Saiba mais</a>
        </div>
      </section>

      {/* Seção Sobre Nós */}
      <section id="sobre" className="secao-sobre-nos">
        <h2>Sobre Nós</h2>
        <div className="container-sobre">
          <img src={banner} alt="Equipe da ONG Esperança Viva em ação" />
          <div className="texto-sobre">
            <p>
              A <strong>ONG Esperança Viva</strong> é uma organização sem fins lucrativos dedicada a promover
              a inclusão social e o bem-estar de famílias em situação de vulnerabilidade. Atuamos com projetos
              voltados à <em>educação, saúde, sustentabilidade e geração de renda</em>.
            </p>
            <p>
              Nossos esforços são guiados pela crença de que pequenas ações solidárias podem causar grandes
              transformações nas comunidades que mais precisam.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Missão, Visão e Valores */}
      <section className="secao-missao">
        <h2>Missão, Visão e Valores</h2>
        <div className="missao-grid">
          <article>
            <h3>Missão</h3>
            <p>Transformar vidas por meio da solidariedade, da educação e do trabalho comunitário.</p>
          </article>

          <article>
            <h3>Visão</h3>
            <p>Ser referência nacional em projetos sociais sustentáveis e de impacto positivo nas comunidades carentes.</p>
          </article>

          <article>
            <h3>Valores</h3>
            <ul>
              <li>Solidariedade</li>
              <li>Transparência</li>
              <li>Respeito</li>
              <li>Inclusão</li>
              <li>Sustentabilidade</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Inicio;

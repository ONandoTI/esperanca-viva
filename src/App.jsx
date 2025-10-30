import React, { useState } from 'react';
import Navbar from './Navbar'; // 1. Importamos o componente Navbar
import Inicio from './Inicio'; // 2. Importamos a nova página inicial
import Projetos from './Projetos'; // 3. Importamos a nova página de Projetos
import Cadastro from './Cadastro'; // 3. Importamos a nova página de Cadastro
import Footer from './Footer'; // 4. Importamos o rodapé
import Doacao from './Doacao'; // 4. Importamos a nova página de Doação
import './App.css'; // O CSS original que estiliza a página 'Inicio'

function App() {
  // 5. Estado para controlar a página atual
  const [currentPage, setCurrentPage] = useState('inicio');

  // 6. Função para renderizar a página correta com base no estado
  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <Inicio />;
      case 'projetos':
        // Passamos 'setCurrentPage' para que os links dentro de Projetos funcionem
        return <Projetos setCurrentPage={setCurrentPage} />;
      case 'cadastro':
        return <Cadastro setCurrentPage={setCurrentPage}/>;
      case 'doacao':
        return <Doacao setCurrentPage={setCurrentPage}/>;
      default:
        return <Inicio />;
    }
  };

  return (
    // 7. Passamos a função 'setCurrentPage' para o Navbar
    <div className="app-container">
      {/* O Navbar agora pode alterar o estado do App */}
      <Navbar setCurrentPage={setCurrentPage} />

      {/* 8. O 'main' agora renderiza a página atual dinamicamente */}
      <main className="app-main">
        {renderPage()}
      </main>
      
      {/* 9. O rodapé é adicionado fora do 'main' para ficar sempre visível */}
      <Footer />
    </div>
  );
}

export default App;

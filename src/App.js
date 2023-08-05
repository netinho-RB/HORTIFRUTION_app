import React, { useState, useEffect } from 'react';
import Carrinho from './Carrinho';


const App = () => {
  const [carrinhoItens, setCarrinhoItens] = useState([]);

  useEffect(() => {
    fetchHistoricoVendas();
  }, []);

  const fetchHistoricoVendas = async () => {
    try {
      const response = await fetch('/api/historico-vendas');
      const data = await response.json();
      setCarrinhoItens(data); // Atualizamos a variável carrinhoItens com os dados obtidos
    } catch (error) {
      console.error('Erro ao obter o histórico de vendas:', error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Hortifruti Online</h1>
      </header>
      <main>
        <h2>Histórico de Vendas</h2>
        <table id="tabela-historico">
          {/* Tabela de histórico de vendas aqui */}
        </table>
        <Carrinho carrinhoItens={carrinhoItens} />
      </main>
      <footer>
        <p>Desenvolvido por Você</p>
      </footer>
    </div>
  );
};

export default App;

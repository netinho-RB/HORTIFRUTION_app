
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carrinho from './Carrinho'; // Importe o componente Carrinho

const App = () => {
  // ... código do componente App ...

  // Função para obter o histórico de vendas do backend
  const fetchHistoricoVendas = async () => {
    try {
      const response = await axios.get('/api/historico-vendas'); // Faça a chamada para o backend
      setHistoricoVendas(response.data); // Atualize o estado com os dados obtidos
    } catch (error) {
      console.error('Erro ao obter o histórico de vendas:', error);
    }
  };

  // ... código do componente App ...
};

export default App;
 
 
const App = () => {
  const [historicoVendas, setHistoricoVendas] = useState([]);
  const [carrinhoItens, setCarrinhoItens] = useState([]);

  useEffect(() => {
    // ... Código anterior para obter o histórico de vendas ...

    // Chame a função para obter o histórico de vendas quando o componente for montado
    fetchHistoricoVendas();
  }, []);

  // Função para adicionar itens ao carrinho de compras
  const adicionarAoCarrinho = (item) => {
    setCarrinhoItens([...carrinhoItens, item]);
  };

  return (
    <div className="App">
      {/* ... Código anterior ... */}
      <main>
        <h2>Histórico de Vendas</h2>
        <table id="tabela-historico">
          <thead>
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Quantidade (kg)</th>
              <th>Valor (R$)</th>
              <th>Ação</th> {/* Coluna para adicionar ao carrinho */}
            </tr>
          </thead>
          <tbody>
            {historicoVendas.map((venda) => (
              <tr key={venda.data}>
                <td>{venda.data}</td>
                <td>{venda.descricao}</td>
                <td>{venda.quantidade}</td>
                <td>R$ {venda.valor.toFixed(2)}</td>
                <td>
                  <button onClick={() => adicionarAoCarrinho(venda)}>Adicionar ao Carrinho</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Carrinho carrinhoItens={carrinhoItens} /> {/* Renderize o componente Carrinho */}
    </div>
  );
};

export default App;

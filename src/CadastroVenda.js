import React, { useState } from 'react';

const CadastroVenda = () => {
  const [idCliente, setIdCliente] = useState('');
  const [dataVenda, setDataVenda] = useState('');
  const [totalVenda, setTotalVenda] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar os dados da venda para o servidor usando uma requisição POST
    fetch('/api/cadastrar-venda', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_cliente: idCliente,
        data_venda: dataVenda,
        total_venda: totalVenda,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Lógica para lidar com a resposta do servidor, se necessário
        console.log(data);
      })
      .catch((error) => {
        console.error('Erro ao cadastrar venda:', error);
      });
  };

  return (
    <div>
      <h2>Cadastro de Venda</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID do Cliente:
          <input
            type="number"
            value={idCliente}
            onChange={(e) => setIdCliente(e.target.value)}
          />
        </label>
        <label>
          Data da Venda:
          <input
            type="date"
            value={dataVenda}
            onChange={(e) => setDataVenda(e.target.value)}
          />
        </label>
        <label>
          Total da Venda:
          <input
            type="number"
            step="0.01"
            value={totalVenda}
            onChange={(e) => setTotalVenda(e.target.value)}
          />
        </label>
        <button type="submit">Cadastrar Venda</button>
      </form>
    </div>
  );
};

export default CadastroVenda;

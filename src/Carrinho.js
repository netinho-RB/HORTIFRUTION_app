import React from 'react';

const Carrinho = ({ carrinhoItens }) => {
  return (
    <div id="carrinho">
      <h3>Carrinho de Compras</h3>
      <ul>
        {carrinhoItens.map((item) => (
          <li key={item.id}>
            <span>{item.nome}</span>
            <span>Quantidade: {item.quantidade}</span>
            <span>Preço: R$ {item.preco.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrinho;

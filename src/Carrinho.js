import React from 'react';

const Carrinho = ({ carrinhoItens }) => {
  return (
    <div className="carrinho">
      <h2>Carrinho de Compras</h2>
      {carrinhoItens && carrinhoItens.length > 0 ? (
        <ul>
          {carrinhoItens.map((item) => (
            <li key={item.id}>
              {item.descricao} - {item.quantidade} kg - R$ {item.valor.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>O carrinho está vazio.</p>
      )}
    </div>
  );
};

export default Carrinho;

import React from 'react';
import { Produto } from './Cadastro';

interface ListagemProps {
  produtos: Produto[];
  onNovoProduto: () => void;
}

const Listagem: React.FC<ListagemProps> = ({ produtos, onNovoProduto }) => {
  const produtosOrdenados = [...produtos].sort((a, b) => a.valor - b.valor);

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  };

  return (
    <div>
      <button onClick={onNovoProduto}>Novo Produto</button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {produtosOrdenados.map((produto, index) => (
            <tr key={index}>
              <td>{produto.nome}</td>
              <td>{formatarMoeda(produto.valor)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listagem;

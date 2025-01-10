import React, { useState } from 'react';
import Cadastro, { Produto } from './Cadastro';
import Listagem from './Listagem';
import './style.css';

const App: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [mostrarCadastro, setMostrarCadastro] = useState(true);

  const handleProdutoCadastrado = (produto: Produto) => {
    setProdutos([...produtos, produto]);
    setMostrarCadastro(false);
  };

  return (
    <div>
      {mostrarCadastro ? (
        <Cadastro onProdutoCadastrado={handleProdutoCadastrado} />
      ) : (
        <Listagem produtos={produtos} onNovoProduto={() => setMostrarCadastro(true)} />
      )}
    </div>
  );
};

export default App;

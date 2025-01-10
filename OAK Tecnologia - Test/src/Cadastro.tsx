import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: black;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0 auto 20px;
  max-width: 100px;
`;

interface Produto {
  nome: string;
  descricao: string;
  valor: number;
  disponivel: boolean;
}

interface CadastroProps {
  onProdutoCadastrado: (produto: Produto) => void;
}

const Cadastro: React.FC<CadastroProps> = ({ onProdutoCadastrado }) => {
  const [produto, setProduto] = useState<Produto>({ nome: '', descricao: '', valor: 0, disponivel: true });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: name === 'valor' ? parseFloat(value) : name === 'disponivel' ? value === 'sim' : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onProdutoCadastrado(produto);
    setProduto({ nome: '', descricao: '', valor: 0, disponivel: true });
  };

  return (
    <FormContainer>
      <Image src="/oaktecnologia.jpg" alt="OAK" />
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome do produto:</Label>
          <Input type="text" name="nome" value={produto.nome} onChange={handleInputChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Descrição do produto:</Label>
          <Input type="text" name="descricao" value={produto.descricao} onChange={handleInputChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Valor do produto:</Label>
          <Input type="number" name="valor" value={produto.valor} onChange={handleInputChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Disponível para venda:</Label>
          <Select name="disponivel" value={produto.disponivel ? 'sim' : 'não'} onChange={handleInputChange} required>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </Select>
        </FormGroup>
        <Button type="submit">Cadastrar Produto</Button>
      </form>
    </FormContainer>
  );
};

export default Cadastro;

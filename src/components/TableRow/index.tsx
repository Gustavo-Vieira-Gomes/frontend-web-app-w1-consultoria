import React from 'react';
import { Row, ViewButton } from './style';
import { Eye } from 'lucide-react';
import { useNavigate } from "react-router-dom";

interface Patrimonio {
  nome: string;
  valor: string;
  porcentagem: string;
}

const TableRow: React.FC<{ patrimonio: Patrimonio}> = ({ patrimonio }) => {
  const navigate = useNavigate();


  return (
    <Row>
      <td>{patrimonio.nome}</td>
      <td>{patrimonio.valor}</td>
      <td>{patrimonio.porcentagem}</td>
      <td><ViewButton onClick={() => navigate(`/passivos/details`)}><Eye size={18} /></ViewButton></td>
    </Row>
  );
};

export default TableRow;

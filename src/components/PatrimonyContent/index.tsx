
import React from 'react';
import { Container, Header, ChartContainer, TotalBox, Table } from './style';
import TableRow from '../TableRow';
import AddButton from '../AddButton';

interface Patrimonio {
  nome: string;
  valor: string;
  porcentagem: string;
}

interface DashboardContentProps {
  tituloGrafico: string;
  tituloTotais: string;
  descricaoTotais: string;
  valorTotais: string;
  tituloTabela: string[];
  patrimonio: Patrimonio[];
  textoBotao: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({
  tituloGrafico,
  tituloTotais,
  descricaoTotais,
  valorTotais,
  tituloTabela,
  patrimonio,
  textoBotao
}) => {
  return (
    <Container>
      <Header>
        <ChartContainer>
          <h2>{tituloGrafico}</h2>
          <img src="" alt="Gráfico" />
        </ChartContainer>

        <TotalBox>
          <h3>{tituloTotais}</h3>
          <p>{descricaoTotais}</p>
          <div>
            <span>{valorTotais}</span>
          </div>
          <AddButton text={textoBotao} />
        </TotalBox>
      </Header>

      <Table>
        <thead>
          <tr>
            {tituloTabela.map((col, i) => (
              <th key={i}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {patrimonio.map((patrimonio, i) => (
            <TableRow key={i} patrimonio={patrimonio} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default DashboardContent;
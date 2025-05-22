import React from "react";
import PatrimonyContent from '../../components/PatrimonyContent';
import Sidebar from '../../components/MenuLateral';
import { Page } from './style';



const Ativos: React.FC = () => {
  return (
    <Page>
      <Sidebar />

      <PatrimonyContent
        tituloGrafico="Divisão Patrimonial Ativos"
        tituloTotais="Valor total em Ativos"
        descricaoTotais="Observe o valor total dos seus ativos"
        valorTotais="R$820.000,00"
        tituloTabela={["Ativo", "Valor", "Porcentagem", "Ações"]}
        textoBotao="Adicionar Ativo"
        patrimonio={[
          { nome: 'Casa', valor: 'R$500.000,00', porcentagem: '60,98%' },
          { nome: 'Carro 1', valor: 'R$80.000,00', porcentagem: '9,76%' }
        ]}
      />
    </Page>
  );
}

export default Ativos;

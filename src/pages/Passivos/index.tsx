import React from "react";
import PatrimonyContent from '../../components/PatrimonyContent';
import Sidebar from '../../components/MenuLateral';
import { Page } from './style';




const Passivos: React.FC = () => {
  return (
    <Page>
      <Sidebar />

      <PatrimonyContent
        tituloGrafico="Divisão Patrimonial Passivos"
        tituloTotais="Valor total em Passivos"
        descricaoTotais="Observe o valor total dos seus passivos"
        valorTotais="$240.000,00"
        tituloTabela={["Passivos", "Valor", "Porcentagem", "Ações"]}
        textoBotao="Adicionar Passivo"
        patrimonio={[
          { nome: 'Financiamento Casa', valor: 'R$200.000,00', porcentagem: '50%' },
          { nome: 'Financiamento Carro 1', valor: 'R$40.000,00', porcentagem: '50%' }
        ]}
      />
    </Page>
  );
}

export default Passivos;

import React, { useState } from "react";
import Sidebar from "../../components/MenuLateral";
import CardUpdate from "../../components/CardUpdate";
import { Container, Content } from "./style";

const PassivoDetalhesPage: React.FC = () => {
  const [fields, setFields] = useState([
    { name: "nome", label: "Nome do Passivo", value: "Financiamento Casa" },
    { name: "valorTotal", label: "Valor Total", value: "R$250.000,00" },
    { name: "categoria", label: "Categoria", value: "Financiamento" },
    { name: "saldoAtual", label: "Saldo Devedor Atual", value: "R$250.000,00" },
    { name: "juros", label: "Juros Envolvidos", value: "5% a.a" },
    { name: "vencimento", label: "Data de Vencimento Final", value: "26/12/2029" },
    { name: "instituicao", label: "Instituição credora", value: "Banco X" },
    { name: "obs", label: "Observação", value: "-" },
  ]);

  const handleChange = (name: string, value: string) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value } : field))
    );
  };

  return (
    <Container>
      <Sidebar />
      <Content>
        <CardUpdate title="Informações do Passivo" fields={fields} onChange={handleChange} />
      </Content>
    </Container>
  );
};

export default PassivoDetalhesPage;

import React from "react";
import { CadastroContainer, FormSection, Title, LinkText } from "./style";
import LoginAside from "../../components/LoginAside";
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import { Link } from "react-router-dom";

const CadastroPage: React.FC = () => {
  return (
    <CadastroContainer>
      <LoginAside />
      <FormSection>
        <Title>Faça seu cadastro</Title>
        <form>
          <Input label="E-mail" type="email" placeholder="Digite seu e-mail" />
          <Input label="Confirmação de e-mail" type="email" placeholder="Digite seu e-mail novamente" />
          <Input label="CPF" type="text" placeholder="Digite seu CPF" />
          <Input label="Senha" type="password" placeholder="Digite sua senha" />
          <Input label="Confirmação de senha" type="password" placeholder="Confirme sua senha" />
          <SubmitButton text="Cadastro" />
        </form>
        <LinkText>
          Já possui uma conta? <Link to="/">Login</Link>
        </LinkText>
      </FormSection>
    </CadastroContainer>
  );
};

export default CadastroPage;

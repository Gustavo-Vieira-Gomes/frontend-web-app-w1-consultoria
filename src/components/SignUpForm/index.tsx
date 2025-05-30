// src/components/CadastroForm/index.tsx
import React from "react";
import Input from "../Input";
import SubmitBtn from "../SubmitBtn";
import {FormSection, Title, LinkText } from "./style";
import { Link } from "react-router-dom";

const SignUpForm: React.FC = () => {
  return (
<FormSection>
        <Title>Faça seu cadastro</Title>
        <form>
          <Input label="Nome" type="text" placeholder="Digite seu nome" />
          <Input label="E-mail" type="email" placeholder="Digite seu e-mail" />
          <Input label="Confirmação de e-mail" type="email" placeholder="Digite seu e-mail novamente" />
          <Input label="CPF" type="text" placeholder="Digite seu CPF" />
          <Input label="Senha" type="password" placeholder="Digite sua senha" />
          <Input label="Confirmação de senha" type="password" placeholder="Confirme sua senha" />
          <SubmitBtn text="Cadastro" />
        </form>
        <LinkText>
          Já possui uma conta? <Link to="/login">Login</Link>
        </LinkText>
    </FormSection>
  );
};

export default SignUpForm;

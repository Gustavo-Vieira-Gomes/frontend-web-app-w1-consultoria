import React from "react";
import { Link } from "react-router-dom";
import SubmitButton from "../../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Container,
  Title,
  Form,
  Row,
  TextLink,
  CheckboxContainer,
  Divider,
  ErrorMessage,
} from "./style";
import Input from "../Input";

type FormValues = {
  email: string;
  password: string;
  remember: boolean;
};

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();

const onSubmit = (data: FormValues) => {
  console.log("Login enviado:", data);
  navigate("/dashboard");
};

  return (
    <Container>
      <Title>Entre na sua conta</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="E-mail ou CPF"
          placeholder="Digite seu e-mail ou CPF"
          name="email"
          register={register}
        />
        {errors.email && <ErrorMessage>Campo obrigatório</ErrorMessage>}

        <Input
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          name="password"
          register={register}
        />
        {errors.password && <ErrorMessage>Campo obrigatório</ErrorMessage>}

        <Row>
          <CheckboxContainer>
            <input type="checkbox" {...register("remember")} />
            <span>Lembrar de mim</span>
          </CheckboxContainer>
          <TextLink href="#">Esqueci minha senha</TextLink>
        </Row>

        <SubmitButton text="Login" />

        <Divider>
          Não tem uma conta? <Link to="/cadastro"><TextLink>Cadastre-se</TextLink></Link>
        </Divider>
      </Form>
    </Container>
  );
};

export default LoginForm;

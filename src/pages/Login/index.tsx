import React from "react";
import { Container } from "./style";
import LoginForm from "../../components/LoginForm";
import LoginAside from "../../components/LoginAside";


const LoginPage: React.FC = () => {
  return (
    <Container>
      <LoginForm />
      <LoginAside />
    </Container>
  );
};

export default LoginPage;

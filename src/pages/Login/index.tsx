import React from "react";
import { Container } from "./style";
import LoginForm from "../../components/LoginForm";
import Aside from "../../components/Aside";


const LoginPage: React.FC = () => {
  return (
    <Container>
      <LoginForm />
      <Aside />
    </Container>
  );
};

export default LoginPage;

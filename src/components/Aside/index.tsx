import React from "react";
import { Container, Logo, Description } from "./style";

const Aside: React.FC = () => {
  return (
    <Container>
      <Logo src="./W1_White.png" alt="Logo" />
      <Description>
        Se junte a nós neste processo importantíssimo! Acesse sua conta rapidamente.
        Fique seguro e explore durante a personalização da gestão de seu patrimônio.
      </Description>
    </Container>
  );
};

export default Aside;

import React from 'react';
import { Container, TextWrapper, Title, Subtitle, Paragraph, ActionButton, Image } from './style';
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>Holding Patrimonial</Title>
        <Subtitle>É com a W1!</Subtitle>
        <Paragraph>
          Crie sua holding com a gente e garanta vários benefícios que só a W1 tem!
        </Paragraph>
        <Paragraph>
          Não é cliente ainda?
        </Paragraph>
         <Link to="/signup">
            <ActionButton>Crie sua holding aqui</ActionButton>
         </Link>
        
      </TextWrapper>
      <Image src="landing_animation.png" alt="Animação" />
    </Container>
  );
};

export default HeroSection;

import React from 'react';
import { Container, Title, Cards } from './style';
import BenefitCard from '../BenefitCard'

const BenefitsSection: React.FC = () => {
  return (
    <Container>
      <Title>Benefícios de criar uma Holding com a W1</Title>
      <Cards>
        <BenefitCard
          title="Sucessão e proteção patrimonial"
          description="Evite conflitos judiciais e proteja seu patrimônio contra imprevistos com uma estrutura legal sólida."
        />
        <BenefitCard
          title="Economia e eficiência tributária"
          description="Reduza impostos sobre lucros, aluguéis e heranças de forma segura e rápida."
        />
        <BenefitCard
          title="Organização e gestão dos bens"
          description="Centralize seus bens e facilite a administração com mais controle, tornando-a mais simples e profissional."
        />
      </Cards>
    </Container>
  );
};

export default BenefitsSection;

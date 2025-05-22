import React from "react";
import { Container } from './style';
import HeaderLanding from '../../components/HeaderLanding';
import HeroSection from '../../components/HeroSection';
import BenefitsSection from '../../components/BenefitsSection';
import SimulationSection from '../../components/SimulationSection';
import FooterLanding from '../../components/FooterLanding';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <HeaderLanding />
      <HeroSection />
      <BenefitsSection />
      <SimulationSection />
      <FooterLanding />
    </Container>
  );
};


export default LandingPage;

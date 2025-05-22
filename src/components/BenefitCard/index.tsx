import React from 'react';
import { CardContainer } from './style';

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <CardContainer>
      <h3>{title}</h3>
      <div></div>
      <p>{description}</p>
    </CardContainer>
  );
};

export default BenefitCard;

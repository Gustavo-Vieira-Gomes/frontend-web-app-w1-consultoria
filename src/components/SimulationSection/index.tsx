
import React, { useState } from 'react';
import { SectionWrapper, Title, ButtonRow } from './style';
import Button from '../Button';
import SimulationForm from '../SimulationForm';
import { Users, Shield, HandCoins} from "lucide-react";

const SimulationSection: React.FC = () => {
  const [selected, setSelected] = useState('impostos');

  return (
    <SectionWrapper>
      <Title>Faça aqui suas simulações</Title>
      <ButtonRow>
        <Button selected={selected === 'impostos'} onClick={() => setSelected('impostos')}>
          <HandCoins /> Economia de Impostos
        </Button>
        <Button selected={selected === 'sucessao'} onClick={() => setSelected('sucessao')}>
          <Users /> Sucessão Patrimonial
        </Button>
        <Button selected={selected === 'protecao'} onClick={() => setSelected('protecao')}>
          <Shield /> Proteção Patrimonial
        </Button>
      </ButtonRow>
      <SimulationForm selected={selected} />
    </SectionWrapper>
  );
};

export default SimulationSection;

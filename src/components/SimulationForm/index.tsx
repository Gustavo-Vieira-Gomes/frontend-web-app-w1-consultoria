import React from 'react';
import { Container } from './style';

interface SimulationFormProps {
  selected: string;
}
const SimulationForm: React.FC<SimulationFormProps> = ({ selected }) => {
  let text = '';
  if (selected === 'impostos') text = 'Formulário para Economia de Impostos';
  else if (selected === 'sucessao') text = 'Formulário para Sucessão Patrimonial';
  else if (selected === 'protecao') text = 'Formulário para Proteção Patrimonial';
  return (
    <Container>
      {text}
    </Container>
  );
};


export default SimulationForm;

import styled from 'styled-components';
import theme from '../../styles/styled-theme';

export const SectionWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: ${theme.color.white};
  border-top: 2px solid ${theme.color.main.secondary.default};
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${theme.color.main.secondary.default};
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

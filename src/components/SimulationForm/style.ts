import styled from 'styled-components';
import theme from '../../styles/styled-theme';

export const Container = styled.div`
  background-color: ${theme.color.white};
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 2rem;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 2rem auto 0;
  font-size: 1rem;
  color: ${theme.color.main.secondary.default};
`;

import styled from 'styled-components';
import theme from '../../styles/styled-theme';

export const Button = styled.button`
  background: ${theme.color.background};
  color: ${theme.color.main.primary.default};
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;


  &:hover {
    background: #f0f0f0;
  }
`;

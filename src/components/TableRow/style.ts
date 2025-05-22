import styled from 'styled-components';
import theme from '../../styles/styled-theme';

export const Row = styled.tr`
  td {
    padding: 0.75rem;
  }
`;

export const ViewButton = styled.button`
  background: ${theme.color.main.secondary.default};
  border: none;
  cursor: pointer;
  color: ${theme.color.white};
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;

  &:hover {
    background: ${theme.color.main.secondary.light};
  }
`;
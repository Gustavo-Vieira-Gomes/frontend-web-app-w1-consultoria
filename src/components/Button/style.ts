import styled from 'styled-components';
import theme from '../../styles/styled-theme';

interface ButtonProps {
  selected: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => (props.selected ? theme.color.main.secondary.default : theme.color.white)};
  background-color: ${(props) => (props.selected ? theme.color.main.primary.default : theme.color.main.secondary.default)};

  &:hover {
    background-color: ${theme.color.main.primary.default};
    color: ${theme.color.main.secondary.default};
  }

  transition: background-color 0.3s ease;
`;

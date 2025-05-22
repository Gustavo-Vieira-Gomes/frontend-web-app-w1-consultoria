import styled from 'styled-components';
import theme  from "../../styles/styled-theme";

export const Container = styled.header`
  background-color: ${theme.color.main.secondary.default};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Button = styled.button`
  background-color: ${theme.color.main.primary.default};
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1.2rem;
  color: ${theme.color.main.secondary.default};
  font-weight: bold;
  cursor: pointer;
    transition: background 0.3s;

  &:hover {
    background-color: ${theme.color.main.primary.light};

  }
`;

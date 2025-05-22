import styled from "styled-components";
import theme  from "../../styles/styled-theme";

export const Container = styled.div`
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    transform: scale(1.2);
  }

  span {
    font-size: 0.9rem;
  }
`;

export const TextLink = styled.a`
  font-size: 0.9rem;
  color: ${theme.color.main.primary.default};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
`;

export const ErrorMessage = styled.span`
  color: ${theme.color.error};
  font-size: 0.8rem;
  margin-top: -0.8rem;
  margin-bottom: 0.5rem;
`;

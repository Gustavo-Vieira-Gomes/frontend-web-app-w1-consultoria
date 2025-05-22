import styled from "styled-components";
import theme  from "../../styles/styled-theme";

export const Container = styled.div`
  flex: 1;
  background-color: ${theme.color.main.secondary.default};
  color: ${theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  margin: 0;
`;

export const Logo = styled.img`
  max-width: 500px;
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

import styled from 'styled-components';
import theme  from "../../styles/styled-theme";

export const Container = styled.section`
  background-color: ${theme.color.main.secondary.default};
  color: ${theme.color.white};
  padding: 3rem 5%;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

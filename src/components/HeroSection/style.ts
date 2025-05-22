import styled from 'styled-components';
import theme  from "../../styles/styled-theme";

export const Container = styled.section`
  background-color: ${theme.color.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 3%;
  flex-wrap: wrap;
`;

export const TextWrapper = styled.div`
  max-width: 50%;
`;

export const Title = styled.h1`
  color: ${theme.color.main.secondary.default};
  font-size: 3rem;
`;

export const Subtitle = styled.h2`
  color: ${theme.color.main.secondary.default};
  font-size: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const ActionButton = styled.button`
  padding: 1rem 1.5rem;
  background-color: ${theme.color.main.secondary.default};
  color: ${theme.color.white};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: ${theme.color.main.secondary.light};

  }
`;

export const Image = styled.img`
  max-width: 56%;
  height: auto;
`;

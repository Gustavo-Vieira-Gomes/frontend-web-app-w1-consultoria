import styled from "styled-components";
import theme from "../../styles/styled-theme";

export const CardContainer = styled.div`
  background-color: ${theme.color.white};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.color.main.secondary.default};
`;

export const EditIconWrapper = styled.div`
  background-color: ${theme.color.main.primary.default};
  padding: 6px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: white;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`;

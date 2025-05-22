import styled, {css} from "styled-components";
import theme from "../../styles/styled-theme";

export const Container = styled.div`
  width: 220px;
  height: 100vh;
  background-color: ${theme.color.main.secondary.default};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Top = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Logo = styled.img`
  width: 170px;
  height: auto;
`;

export const Middle = styled.div`
  flex: 1;
  padding: 16px 0;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px;
  border-top: 1px solid #444;
`;

export const DropdownDiv = styled.div<{ $open?: boolean }>`
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: all 0.3s ease;
  padding-left: 24px;

  ${({ $open }) =>
    $open &&
    css`
      max-height: 200px;
      opacity: 1;
    `}
`;


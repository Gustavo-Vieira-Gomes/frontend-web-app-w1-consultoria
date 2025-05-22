import styled, {css} from "styled-components";
import theme  from "../../../styles/styled-theme";

export const SidebarItemWrapper = styled.div<{ $active?: boolean; $onlyIcon?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;
  background-color: ${({ $active }) => ($active ? theme.color.main.primary.default : "transparent")};
  color: ${({ $active }) => ($active ? theme.color.main.secondary.default : theme.color.white)};
  border-radius: 8px;
  margin: 8px 8px;
   &:hover {
    background-color: ${theme.color.main.primary.default};
    color: ${theme.color.main.secondary.default};
  }

${({ $onlyIcon }) =>
    $onlyIcon && css`
      justify-content: center;
      padding: 12px;
      gap: 0;

      &:hover {
        background-color: transparent;
        color: ${theme.color.main.primary.default};
      }
    `}
`;

export const iconDropdown = styled.div<{ $rotated?: boolean }>`
  margin-left: auto;
  color: inherit;
  cursor: pointer;
 transition: transform 0.3s ease;

  ${({ $rotated }) =>
    $rotated &&
    css`
      transform: rotate(180deg);
    `}
`;

export const IconWrapper = styled.div`
  margin-right: 8px;
`;

export const Label = styled.span`
  font-size: 14px;
`;

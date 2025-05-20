import styled, {css} from "styled-components";

export const MenuItemWrapper = styled.div<{ $active?: boolean; $onlyIcon?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;
  background-color: ${({ $active }) => ($active ? "#1DE9B6" : "transparent")};
  color: ${({ $active }) => ($active ? "#000" : "#fff")};
  border-radius: 8px;
  margin: 8px 8px;
   &:hover {
    background-color: #1DE9B6;
    color: #000;
  }

${({ $onlyIcon }) =>
    $onlyIcon && css`
      justify-content: center;
      padding: 12px;
      gap: 0;

      &:hover {
        background-color: transparent;
        color:  #1DE9B6;
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

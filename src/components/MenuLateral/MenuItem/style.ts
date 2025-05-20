import styled from "styled-components";

export const MenuItemWrapper = styled.div<{ $active?: boolean }>`
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
`;

export const IconWrapper = styled.div`
  margin-right: 8px;
`;

export const Label = styled.span`
  font-size: 14px;
`;

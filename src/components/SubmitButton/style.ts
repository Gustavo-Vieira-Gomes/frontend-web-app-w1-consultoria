import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #0e141b;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.3s;

  &:hover {
    background-color: #1e293b;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.3rem;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Field = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

export const ToggleIcon = styled.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

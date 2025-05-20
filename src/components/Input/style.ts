import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Field = styled.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;

export const ToggleIcon = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

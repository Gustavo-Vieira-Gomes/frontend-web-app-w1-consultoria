import styled from "styled-components";

export const Container = styled.div`
  width: 220px;
  height: 100vh;
  background-color: #0d0d0d;
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
  padding: 16px;
  border-top: 1px solid #333;
`;


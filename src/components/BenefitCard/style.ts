import styled from 'styled-components';
import theme  from "../../styles/styled-theme";

export const CardContainer = styled.div`
  background-color: ${theme.color.white};
  color: ${theme.color.main.secondary.default};
  padding: 1.5rem;
  border-radius: 8px;
  flex: 1;
  min-width: 250px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  height: 430px;  
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }

  h3{
    color: ${theme.color.main.secondary.default};
    font-size: 1.7rem;
  }

  p{
    color: ${theme.color.main.secondary.default};
    font-size: 1.4rem;
  }

  div{
    background-color: ${theme.color.main.secondary.default};
    width: 100%;
    height: 5px;
    margin-bottom: 1rem;
  }
`;
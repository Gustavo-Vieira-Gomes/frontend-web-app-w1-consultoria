import styled, { keyframes } from 'styled-components';
import theme from '../../styles/styled-theme';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;



export const FormSection = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  animation: ${slideIn} 0.6s ease;
`;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

export const LinkText = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;

  a {
    color: ${theme.color.main.primary.default};
    text-decoration: none;
    text-underline: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
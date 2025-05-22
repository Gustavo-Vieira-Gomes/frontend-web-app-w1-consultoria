import React from 'react';
import { StyledButton } from './style';


interface ButtonProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, selected = false, onClick }) => {
  return (
    <StyledButton selected={selected} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

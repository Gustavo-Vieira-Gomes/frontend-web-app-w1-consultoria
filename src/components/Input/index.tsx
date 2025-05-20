import React, { useState } from "react";
import { Container, Label, Field, Wrapper, ToggleIcon } from "./style";
import olhoAberto from "../../assets/olho.png";
import olhoFechado from "../../assets/olho_fechado.png";

type Props = {
  label: string;
  type?: string;
  placeholder?: string;
  register?: any;
  name?: string;
};

const Input: React.FC<Props> = ({ label, type = "text", placeholder, register, name }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <Container>
      <Label>{label}</Label>
      <Wrapper>
        <Field
          type={inputType}
          placeholder={placeholder}
          {...(register && name ? register(name) : {})}
        />
        {isPassword && (
          <ToggleIcon type="button" onClick={() => setShowPassword(!showPassword)}>
            <img
              src={showPassword ? olhoFechado : olhoAberto}
              alt={showPassword ? "Esconder senha" : "Mostrar senha"}
            />
          </ToggleIcon>
        )}
      </Wrapper>
    </Container>
  );
};

export default Input;

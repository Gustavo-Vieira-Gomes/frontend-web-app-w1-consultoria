import React from "react";
import { Container, Label, Field, Wrapper, ToggleIcon } from "./style";

type Props = {
  label: string;
  type?: string;
  placeholder?: string;
  register?: any;
  name?: string;
};

const Input: React.FC<Props> = ({ label, type = "text", placeholder, register, name }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Wrapper>
        <Field
          type={type}
          placeholder={placeholder}
          {...(register && name ? register(name) : {})}
        />
        {type === "password" && <ToggleIcon>👁️</ToggleIcon>}
      </Wrapper>
    </Container>
  );
};

export default Input;

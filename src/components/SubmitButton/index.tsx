import React from "react";
import { Button } from "./style";

interface Props {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const SubmitButton: React.FC<Props> = ({ text, type = "submit", onClick }) => {
  return <Button type={type} onClick={onClick}>{text}</Button>;
};

export default SubmitButton;
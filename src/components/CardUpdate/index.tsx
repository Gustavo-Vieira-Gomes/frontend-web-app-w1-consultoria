import React from "react";
import Input from "../Input";
import { CardContainer, TitleWrapper, Title, EditIconWrapper, Grid } from "./style";
import { Pencil } from "lucide-react";

type Field = {
  label: string;
  name: string;
  value: string;
};

type Props = {
  title: string;
  fields: Field[];
  onChange: (name: string, value: string) => void;
};

const CardUpdate: React.FC<Props> = ({ title, fields, onChange }) => {
  return (
    <CardContainer>
      <TitleWrapper>
        <Title>{title}</Title>
        <EditIconWrapper>
          <Pencil size={18} />
        </EditIconWrapper>
      </TitleWrapper>
      <Grid>
        {fields.map((field) => (
          <Input
            key={field.name}
            label={field.label}
            name={field.name}
            placeholder={field.label}
            type="text"
            register={() => ({})} // opcional, já que não está usando react-hook-form
            // Para usar valor controlado:
            value={field.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange(field.name, e.target.value)
            }
          />
        ))}
      </Grid>
    </CardContainer>
  );
};

export default CardUpdate;

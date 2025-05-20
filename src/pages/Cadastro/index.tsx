import React from "react";
import { CadastroContainer} from "./style";
import Aside from "../../components/Aside";

import CadastroForm from "../../components/CadastroForm";

const CadastroPage: React.FC = () => {
  return (
    <CadastroContainer>
      <Aside />
      <CadastroForm />
    </CadastroContainer>
  );
};

export default CadastroPage;

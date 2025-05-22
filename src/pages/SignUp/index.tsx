import React from "react";
import { CadastroContainer} from "./style";
import Aside from "../../components/Aside";

import SignUpForm from "../../components/SignUpForm";

const CadastroPage: React.FC = () => {
  return (
    <CadastroContainer>
      <Aside />
      <SignUpForm />
    </CadastroContainer>
  );
};

export default CadastroPage;

import React, { useState } from "react";
import { Container, Logo, Top, Middle, Bottom } from "./style";
import MenuItem from "./MenuItem";
import { ChartNoAxesCombined, Building, TrendingUp, CircleDollarSign, LogOut, Landmark , User, Banknote} from "lucide-react";
import { Link } from "react-router-dom";

const MenuLateral: React.FC = () => {
  const [patrimoniosOpen, setPatrimoniosOpen] = useState(false);

  return (
    <Container>
      <Top>
        <Logo src="W1_WhiteText.png" alt="W1 Logo"/>
      </Top>

      <Middle>
        <MenuItem icon={ChartNoAxesCombined} label="Dashboard" active />
        <MenuItem icon={Building} label="Holding" />
        <MenuItem
          icon={CircleDollarSign}
          label="Patrimônios"
          onClick={() => setPatrimoniosOpen(!patrimoniosOpen)}
        />
        {patrimoniosOpen && (
          <div style={{ paddingLeft: 24 }}>
            <MenuItem icon={Landmark } label="Ativos" />
            <MenuItem icon={Banknote} label="Passivos" />
          </div>
        )}
        <MenuItem icon={TrendingUp} label="Sucessão Pat." />
      </Middle>

      <Bottom>
        <MenuItem icon={User} label="Perfil" />
        <Link to="/login">
          <MenuItem icon={LogOut} label="Sair" />
        </Link>
      </Bottom>
    </Container>
  );
};

export default MenuLateral;

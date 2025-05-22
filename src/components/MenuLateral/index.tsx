import React, { useState } from "react";
import { Container, Logo, Top, Middle, Bottom, DropdownDiv } from "./style";
import SidebarItem from "./SidebarItem";
import {
  ChartNoAxesCombined,
  Building,
  TrendingUp,
  CircleDollarSign,
  LogOut,
  Landmark,
  User,
  Banknote,
  ChevronDown,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [patrimoniosOpen, setPatrimoniosOpen] = useState(
    location.pathname.startsWith("/ativos") || location.pathname.startsWith("/passivos")
  );

  return (
    <Container>
      <Top>
        <Logo src="W1_WhiteText.png" alt="W1 Logo" />
      </Top>

      <Middle>
        <SidebarItem icon={ChartNoAxesCombined} label="Dashboard" to="/dashboard" />
        <SidebarItem icon={Building} label="Holding" to="/holding" />

        <SidebarItem
          icon={CircleDollarSign}
          label="Patrimônios"
          to=""
          onClick={() => setPatrimoniosOpen(!patrimoniosOpen)}
          iconDropdown={ChevronDown}
          rotateIcon={patrimoniosOpen}
        />

        <DropdownDiv $open={patrimoniosOpen}>
          <SidebarItem icon={Landmark} label="Ativos" to="/ativos" />
          <SidebarItem icon={Banknote} label="Passivos" to="/passivos" />
        </DropdownDiv>

        <SidebarItem icon={TrendingUp} label="Sucessão Pat." to="/sucessao" />
      </Middle>

      <Bottom>
        <SidebarItem icon={User} label="Perfil" onlyIcon to="/perfil" />
        <SidebarItem icon={LogOut} label="Sair" onlyIcon to="/login" />
      </Bottom>
    </Container>
  );
};

export default Sidebar;

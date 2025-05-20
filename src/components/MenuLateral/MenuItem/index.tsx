import React from "react";
import { MenuItemWrapper, IconWrapper, Label } from "./style";
import type { LucideIcon } from "lucide-react";

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, label, active, onClick }) => {
  return (
    <MenuItemWrapper $active={active} onClick={onClick}>
      <IconWrapper><Icon size={18} /></IconWrapper>
      <Label>{label}</Label>
    </MenuItemWrapper>
  );
};

export default MenuItem;

import React from "react";
import { MenuItemWrapper, IconWrapper, Label, iconDropdown as IconDropdownWrapper } from "./style";
import type { LucideIcon } from "lucide-react";

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
  onlyIcon?: boolean;
  iconDropdown?: LucideIcon;
  rotateIcon?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, label, active, onClick, onlyIcon, iconDropdown: IconDropdown, rotateIcon }) => {
  return (
    <MenuItemWrapper $active={active} onClick={onClick} $onlyIcon={onlyIcon}>
      <IconWrapper><Icon size={18} /></IconWrapper>
      {!onlyIcon && <Label>{label}</Label>}
      {IconDropdown && (
        <IconDropdownWrapper $rotated={rotateIcon}>
          <IconDropdown size={18} />
        </IconDropdownWrapper>
      )}
    </MenuItemWrapper>
  );
};

export default MenuItem;

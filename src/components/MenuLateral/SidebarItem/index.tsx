import React from "react";
import { SidebarItemWrapper, IconWrapper, Label, iconDropdown as IconDropdownWrapper } from "./style";
import type { LucideIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  to: string;
  onClick?: () => void;
  onlyIcon?: boolean;
  iconDropdown?: LucideIcon;
  rotateIcon?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  to,
  onClick,
  onlyIcon,
  iconDropdown: IconDropdown,
  rotateIcon
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = to ? location.pathname === to : false;

const handleClick = () => {
  if (onClick) onClick();
  if (to) navigate(to);
};

  return (
    <SidebarItemWrapper $active={isActive} onClick={handleClick} $onlyIcon={onlyIcon}>
      <IconWrapper><Icon size={18} /></IconWrapper>
      {!onlyIcon && <Label>{label}</Label>}
      {IconDropdown && (
        <IconDropdownWrapper $rotated={rotateIcon}>
          <IconDropdown size={18} />
        </IconDropdownWrapper>
      )}
    </SidebarItemWrapper>
  );
};

export default SidebarItem;

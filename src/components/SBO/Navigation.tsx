import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import {
  UnevenGrid as ExamplesIcon,
  Home as HomeIcon,
  Gear as SettingsIcon,
} from '@mineral/icons';
import {
  Divider,
  SideNavMenu,
  SideNavMenuItem,
  SideNavMenuItemProps,
  NAV_ITEM_ACTIVE_CLASSNAME,
} from '@mineral/core';

const BaseNavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, ...restProps }, ref) => (
    <NavLink
      {...restProps}
      className={({ isActive }) =>
        [className, isActive ? NAV_ITEM_ACTIVE_CLASSNAME : null]
          .filter(Boolean)
          .join(' ')
      }
      ref={ref}
    />
  )
);

const SideNavMenuLink: React.FC<
  SideNavMenuItemProps & Omit<NavLinkProps, 'children'>
> = (props) => <SideNavMenuItem component={BaseNavLink} {...props} />;

export const Navigation: React.FC = () => (
  <SideNavMenu>
    <SideNavMenuLink label="Home" to="/" icon={<HomeIcon />} />
    <SideNavMenuLink label="Examples" to="/examples" icon={<ExamplesIcon />} />
    <Divider />
    <SideNavMenuLink label="Settings" to="/settings" icon={<SettingsIcon />} />
  </SideNavMenu>
);

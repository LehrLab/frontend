import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { NavigationButton } from './navigation-keys';

type NavButtonProps = {
  btn: NavigationButton;
};

export const NavButton: FC<NavButtonProps> = ({ btn }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        (isActive ? `navigation__button--active-${btn.iconType}` : `navigation__button--${btn.iconType}`) +
        ` navigation__button`
      }
      to={btn.href}
    >
      {btn.imageComponent({})}
    </NavLink>
  );
};

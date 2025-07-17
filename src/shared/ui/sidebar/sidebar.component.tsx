import { FC } from 'react';
import './sidebar.component.scss';
import { navigationButtons } from './navigation-keys';
import { NavLink } from 'react-router-dom';

export const Sidebar: FC = () => {
  return (
    <div className='sidebar'>
      <img className='sidebar__avatar' />

      <nav className='sidebar__navigation navigation'>
        {navigationButtons.map((btn) => {
          return (
            <NavLink
              className={({ isActive }) =>
                (isActive && `navigation__button--active-${btn.iconType}`) + ` navigation__button`
              }
              key={btn.key}
              to={btn.href}
            >
              {btn.imageComponent({})}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

import { FC } from 'react';
import './sidebar.component.scss';

import { navigationButtons } from './navigation-keys';
import { NavButton } from './nav-button.component';

export const Sidebar: FC = () => {
  return (
    <div className='sidebar'>
      <img className='sidebar__avatar' />

      <nav className='sidebar__navigation navigation'>
        {navigationButtons.map((btn) => {
          return (
            <NavButton
              btn={btn}
              key={btn.key}
            />
          );
        })}
      </nav>
    </div>
  );
};

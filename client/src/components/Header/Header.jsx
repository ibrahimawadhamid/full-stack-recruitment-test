import React from 'react';
import SideDrawerButton from './SideDrawerButton';

import logo from './logo.svg';
import STYLES from './Header.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const Header = () => (
  <header className={c('Header')}>
    <a href="/">
      <span className={c('Header__hidden-text')}>Skyscanner</span>
      <img className={c('Header__logo-image')} alt="Skyscanner" src={logo}/>
    </a>
    <SideDrawerButton/>
  </header>
);

export default Header;

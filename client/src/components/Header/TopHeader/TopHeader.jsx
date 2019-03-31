import React, {Component} from 'react';
import SideDrawerButton from './SideDrawerButton';

import logo from './logo.svg';
import STYLES from './TopHeader.scss';

const c = className => STYLES[className] || 'UNKNOWN';

class TopHeader extends Component {
  render() {
    return (
      <header className={c('TopHeader')}>
        <a href="/">
          <span className={c('TopHeader__hidden-text')}>Skyscanner</span>
          <img className={c('TopHeader__logo-image')} alt="Skyscanner" src={logo}/>
        </a>
        <SideDrawerButton/>
      </header>
    );
  };
};
export default TopHeader;

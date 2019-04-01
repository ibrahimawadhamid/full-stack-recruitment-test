import React, {Component} from 'react';
import SideDrawerButton from './SideDrawerButton';
import logo from './logo.svg';
import STYLES from './TopHeader.scss';

const classes = className => STYLES[className] || 'UNKNOWN';

class TopHeader extends Component {
  render() {
    return (
      <header className={classes('TopHeader')}>
        <a href="/">
          <span className={classes('TopHeader__hidden-text')}>Skyscanner</span>
          <img className={classes('TopHeader__logo-image')} alt="Skyscanner" src={logo}/>
        </a>
        <SideDrawerButton/>
      </header>
    );
  };
}
export default TopHeader;

import React, {Component} from 'react';
import TopHeader from "./TopHeader";
import InfoHeader from "./InfoHeader";
import ControlsHeader from "./ControlsHeader";

class Header extends Component {
  render() {
    return(
      <div>
        <TopHeader />
        <InfoHeader/>
        <ControlsHeader/>
      </div>
    );
  };
};

export default Header;
